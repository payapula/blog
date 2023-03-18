import { Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
    title: string;
};

function QuizHeader({ title }: Props) {
    return (
        <Heading as="h1" textAlign="center" mt={5}>
            {title}
        </Heading>
    );
}

export default QuizHeader;
