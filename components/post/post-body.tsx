import { MutableRefObject, ReactElement } from 'react';
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
        <div className="mt-10" ref={intersectionRef}>
            <MDXRemote {...content} components={usedComponents} />
        </div>
    );
}

export { PostBody };
