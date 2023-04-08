import * as React from 'react';
import { Children } from 'react';
import { Container } from '@chakra-ui/react';
import { ComponentWithChildren } from './utils';

// Should manage all question and answer state: Should be giving final results
export function Playground({ children }: ComponentWithChildren) {
    function incrementValidAnswer() {
        return;
    }

    const AllQuestionSet = Children.map(children, (child, index) => {
        //@ts-ignore
        return React.cloneElement(child, {
            incrementValidAnswer,
            answerSubmitted: true,
            setAnswerSubmitted: () => ({}),
            /** key prop is neccessary to tell react that this is brand new instance */
            key: index
        });
    });

    return (
        <Container maxW={'700px'} display="flex" flexDirection="column" justifyContent="center">
            {AllQuestionSet.map((questionSet) => {
                return questionSet;
            })}
        </Container>
    );
}
