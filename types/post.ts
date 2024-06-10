import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Cover from './cover';

type PostType = {
    //These are from YAML in each MDX page
    title: string;
    excerpt: string;
    date: string;
    description: string;
    cover: Cover;
    ogImage: {
        url: string;
        alt: string;
    };
    keywords: string;
    // These are fetched separately
    slug: string; // From File Name
    content: MDXRemoteSerializeResult; // From hydrated by next-mdx-remote
    // These are unix timestamps from git-date-extractor
    createdDate: string;
    modifiedDate: string;
};

export default PostType;
