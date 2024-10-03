import * as React from 'react';
import { Children } from 'react';
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
        <div className="me-auto ms-auto flex max-w-3xl flex-col justify-center pe-4 ps-4">
            {AllQuestionSet.map((questionSet) => {
                return questionSet;
            })}
        </div>
    );
}
