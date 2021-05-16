import { MutableRefObject, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXComponents } from '../mdx/components';

const components = {
    ...MDXComponents
};

interface PostBodyProps {
    content: MDXRemoteSerializeResult;
    intersectionRef: MutableRefObject<HTMLDivElement>;
}

function PostBody({ content, intersectionRef }: PostBodyProps): ReactElement {
    return (
        <Box mt={10} ref={intersectionRef}>
            <MDXRemote {...content} components={components} />
        </Box>
    );
}

export { PostBody };
