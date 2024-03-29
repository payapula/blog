import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { OverrideProps } from 'types/utils';
import QuizType from 'types/quiz';

const quizzesDirectory = join(process.cwd(), '_quiz');

export function getQuizSlugs() {
    return fs.readdirSync(quizzesDirectory);
}

// Content is MDXRemote.source, so overriding it to string
type RawQuizType = OverrideProps<QuizType, { content: string }>;

type QuizKey = keyof QuizType;

export function getQuizBySlug(slug: string, fields: QuizKey[] = []): Partial<RawQuizType> {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(quizzesDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // We are just sending requested fields, hence Parital<> is used
    const items: Partial<RawQuizType> = {};

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

export function getAllQuizzes(fields: QuizKey[] = [], count: number = null) {
    const slugs = getQuizSlugs();

    // We need 'date' field for ordering recent posts in homepage and blogpage
    const requestedFields: QuizKey[] = fields.includes('date') ? [...fields] : [...fields, 'date'];

    let posts = slugs
        .filter((slug) => !slug.endsWith('draft.mdx')) // Exclude draft files
        .map((slug) => getQuizBySlug(slug, requestedFields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    if (count !== null) {
        posts.length = count;
    }

    return posts;
}
