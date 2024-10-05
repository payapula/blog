import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXQuizComponents } from 'components/mdx/components/quiz';
import React from 'react';

type Props = {
    content: MDXRemoteSerializeResult;
};

function QuizBody({ content }: Props) {
    return (
        <div className="mt-2 md:mt-7">
            <MDXRemote {...content} components={MDXQuizComponents} />
        </div>
    );
}

export { QuizBody };
