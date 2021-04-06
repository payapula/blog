import { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import { MDXComponents } from '../mdx/components';

const components = {
    ...MDXComponents
};

interface PostBodyProps {
    content: MdxRemote.Source;
}

function PostBody({ content }: PostBodyProps): ReactElement {
    const hydratedContent = hydrate(content, { components });
    return <Box mt={10}>{hydratedContent}</Box>;
}

export { PostBody };
