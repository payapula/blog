import { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';
import { MdxRemote } from 'next-mdx-remote/types';
import { MDXComponents } from '../mdx/components';

const components = {
    ...MDXComponents
};

interface PostBodyProps {
    content: MdxRemote.Source;
}

function PostBody({ content }: PostBodyProps): ReactElement {
    return (
        <Box mt={10}>
            <MDXRemote {...content} components={components} />
        </Box>
    );
}

export { PostBody };
