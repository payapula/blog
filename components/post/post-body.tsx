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
    const usedComponents = {
        ...components
    };

    return (
        <Box mt={10} ref={intersectionRef} className="mdx-global-styles">
            <MDXRemote {...content} components={usedComponents} />
        </Box>
    );
}

export { PostBody };
