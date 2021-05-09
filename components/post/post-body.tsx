import { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXComponents } from '../mdx/components';

const components = {
    ...MDXComponents
};

interface PostBodyProps {
    content: MDXRemoteSerializeResult;
}

function PostBody({ content }: PostBodyProps): ReactElement {
    return (
        <Box mt={10}>
            <MDXRemote {...content} components={components} />
        </Box>
    );
}

export { PostBody };
