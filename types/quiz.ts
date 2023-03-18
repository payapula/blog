import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type QuizType = {
    //These are from YAML in each MDX page
    title: string;
    date: string;
    keywords: string;
    // These are fetched separately
    slug: string; // From File Name
    content: MDXRemoteSerializeResult; // From hydrated by next-mdx-remote
};

export default QuizType;
