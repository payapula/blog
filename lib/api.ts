import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostType from 'types/post';
import { OverrideProps } from 'types/utils';

const postsDirectory = join(process.cwd(), '_posts');
const timestampsFile = join(process.cwd(), 'timestamps.json');

function getCreatedAndModifiedDateFromGit(realSlug: string) {
    let createdDate = '',
        modifiedDate = '';
    try {
        const timestamps = JSON.parse(fs.readFileSync(timestampsFile, 'utf8'));
        const currentPostPath = `_posts/${realSlug}.mdx`;
        const { created, modified } = timestamps[currentPostPath];
        createdDate = unixTimeStampToDate(created);
        modifiedDate = unixTimeStampToDate(modified);
    } catch (error) {
        console.error('Unable to read timestamps file');
    }

    return {
        createdDate,
        modifiedDate
    };
}

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

// Content is MDXRemote.source, so overriding it to string
type RawPostType = OverrideProps<PostType, { content: string }>;

type PostKey = keyof PostType;

function unixTimeStampToDate(unixTimeStamp: number) {
    const dt = new Date(unixTimeStamp * 1000);
    return dt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export function getPostBySlug(slug: string, fields: PostKey[] = []): Partial<RawPostType> {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    let createdDate = '',
        modifiedDate = '';

    // Ensure to read timestamps files only when they are needed
    if (fields.includes('createdDate') || fields.includes('modifiedDate')) {
        const dates = getCreatedAndModifiedDateFromGit(realSlug);
        createdDate = dates.createdDate;
        modifiedDate = dates.modifiedDate;
    }

    const { data, content } = matter(fileContents);

    // We are just sending requested fields, hence Parital<> is used
    const items: Partial<RawPostType> = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (field === 'createdDate') {
            items[field] = createdDate;
        }
        if (field === 'modifiedDate') {
            items[field] = modifiedDate;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: PostKey[] = [], count: number = null) {
    const slugs = getPostSlugs();

    // We need 'date' field for ordering recent posts in homepage and blogpage
    const requestedFields: PostKey[] = fields.includes('date') ? [...fields] : [...fields, 'date'];

    let posts = slugs
        .filter((slug) => !slug.endsWith('draft.mdx')) // Exclude draft files
        .map((slug) => getPostBySlug(slug, requestedFields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    if (count !== null) {
        posts.length = count;
    }

    return posts;
}
