import { MutableRefObject, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXComponents } from '../mdx/components';
import dynamic from 'next/dynamic';

const LazyCodeSandbox = dynamic(() => import('mdx-embed').then((mod) => mod.CodeSandbox));
const LazyCodePen = dynamic(() => import('mdx-embed').then((mod) => mod.CodePen));
const LazyTweet = dynamic(() => import('mdx-embed').then((mod) => mod.Tweet));

const components = {
    ...MDXComponents
};

interface PostBodyProps {
    content: MDXRemoteSerializeResult;
    intersectionRef: MutableRefObject<HTMLDivElement>;
    componentNames: string[];
}

function PostBody({ content, intersectionRef, componentNames }: PostBodyProps): ReactElement {
    const usedComponents = {
        ...components,
        CodePen: componentNames.includes('CodePen') ? LazyCodePen : null,
        CodeSandbox: componentNames.includes('CodeSandbox') ? LazyCodeSandbox : null,
        Tweet: componentNames.includes('Tweet') ? LazyTweet : null
    };

    return (
        <Box mt={10} ref={intersectionRef}>
            <MDXRemote {...content} components={usedComponents} />
        </Box>
    );
}

export { PostBody };
