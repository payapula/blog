import { MdxRemote } from 'next-mdx-remote/types';
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
    // These are fetched separately
    slug: string; // From File Name
    content: MdxRemote.Source; // From hydrated by next-mdx-remote
};

export default PostType;
