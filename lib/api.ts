import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostType from 'types/post';
import { OverrideProps } from 'types/utils';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

// Content is MDXRemote.source, so overriding it to string
type RawPostType = OverrideProps<PostType, { content: string }>;

type PostKey = keyof PostType;

export function getPostBySlug(slug: string, fields: PostKey[] = []): Partial<RawPostType> {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
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
