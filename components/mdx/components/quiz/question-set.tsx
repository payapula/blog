import * as React from 'react';
import { Children } from 'react';
import { QuizNavigationButton } from './quiz-navigation-button';
import { CardWrapper } from './card-wrapper';
import { RadioItem } from '@/components/shadcn/radio-item';

interface QuestionSetProps {
    children: React.ReactNode;
    incrementValidAnswer: () => void;
    answerSubmitted: boolean;
    setAnswerSubmitted: (value: boolean) => void;
}

// Should manage individual question / answer state
export function QuestionSet({
    children,
    incrementValidAnswer,
    answerSubmitted,
    setAnswerSubmitted
}: QuestionSetProps) {
    const [value, setValue] = React.useState('');
    const validAnswer = React.useRef<string>();

    const [Question, Choises, Answer] = Children.toArray(children);

    //@ts-ignore
    const choiseElements = Children.map(Choises.props.children, (child, index) => {
        if (child.props?.isAnswer) {
            validAnswer.current = index.toString();
        }
        const value = index.toString();
        const ariaLabel = `label_${value}`;
        return (
            <RadioItem value={value} disabled={answerSubmitted} ariaLabel={ariaLabel}>
                <div className="flex items-baseline [&>p]:mt-0" id={ariaLabel}>
                    {child.props.children}
                </div>
            </RadioItem>
        );
    });

    //@ts-ignore
    const ChoisesWithAdditionalProps = React.cloneElement(Choises, {
        value,
        setValue,
        choiseElements
    });

    function submitAnswer() {
        validAnswer.current === value && incrementValidAnswer();
        setAnswerSubmitted(true);
    }

    const isCorrect = validAnswer.current === value;

    return (
        <CardWrapper>
            {Question}
            <form className="flex flex-col" onSubmit={submitAnswer}>
                {ChoisesWithAdditionalProps}
                <QuizNavigationButton
                    className="mt-4"
                    onClick={submitAnswer}
                    disabled={!value || answerSubmitted}
                    type="submit">
                    Submit
                </QuizNavigationButton>
            </form>
            {answerSubmitted && <AnswerStatus isCorrect={isCorrect} />}
            {answerSubmitted ? Answer : null}
        </CardWrapper>
    );
}

function AnswerStatus({ isCorrect }: { isCorrect: boolean }) {
    return (
        <p className="mt-5 text-center font-bold">
            {isCorrect ? '🎉 Correct 🎉' : '❌ Incorrect ❌'}
        </p>
    );
}
