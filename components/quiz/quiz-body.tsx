import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Box } from '@chakra-ui/react';
import { MDXQuizComponents } from 'components/mdx/components/quiz';
import React from 'react';

type Props = {
    content: MDXRemoteSerializeResult;
};

function QuizBody({ content }: Props) {
    return (
        <Box mt={10} className="quiz-global-styles">
            <MDXRemote {...content} components={MDXQuizComponents} />
        </Box>
    );
}

export { QuizBody };
