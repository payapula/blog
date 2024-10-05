import * as React from 'react';
import { Children } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { ComponentWithChildren } from './utils';
import { QuizNavigationButton } from './quiz-navigation-button';
import { ResultsTable } from './results-table-tw';
import { cn } from '@/lib/utils';

type QuizState = 'idle' | 'playing' | 'over';

// Should manage all question and answer state: Should be giving final results
export function Playground({ children }: ComponentWithChildren) {
    const [quizState, setQuizState] = React.useState<QuizState>('playing');
    const [questionNo, setQuestionNo] = React.useState(1);
    const [totalValidAnswer, setTotalValidAnswer] = React.useState(0);
    const [answerSubmitted, setAnswerSubmitted] = React.useState(false);

    const totalQuestions = Children.count(children);

    function incrementValidAnswer() {
        setTotalValidAnswer((number) => number + 1);
    }

    function resetQuiz() {
        setQuizState('playing');
        setQuestionNo(1);
        setTotalValidAnswer(0);
        setAnswerSubmitted(false);
    }

    /**
     * If there is only one questionset, then `children` is of type `Object`.
     * If there are more than one quesionset, then `children` is of type `Array`
     */
    const questionSet = totalQuestions === 1 ? children : children[questionNo - 1];

    const QuestionSetWithAddedProps = React.cloneElement(questionSet, {
        incrementValidAnswer,
        answerSubmitted,
        setAnswerSubmitted,
        /** key prop is neccessary to tell react that this is brand new instance */
        key: questionNo - 1
    });

    const isFinalQuestion = totalQuestions === questionNo;

    if (quizState === 'over') {
        return (
            <ResultsTable
                totalQuestions={totalQuestions}
                correctAnswers={totalValidAnswer}
                resetQuiz={resetQuiz}
            />
        );
    }

    return (
        <div className="me-auto ms-auto flex max-w-3xl flex-col justify-center pe-4 ps-4">
            <p className="mb-2 text-center">
                Question {questionNo} of {totalQuestions}
            </p>
            {QuestionSetWithAddedProps}
            {answerSubmitted && (
                <QuizNavigationButton
                    disabled={!answerSubmitted}
                    onClick={() => {
                        if (isFinalQuestion) {
                            return setQuizState('over');
                        }
                        setAnswerSubmitted(false);
                        setQuestionNo((n) => n + 1);
                    }}
                    className={cn('mt-4 self-center', {
                        'w-40': isFinalQuestion,
                        'w-24': !isFinalQuestion
                    })}>
                    {isFinalQuestion ? 'Show Results' : 'Next'}
                    <FaLongArrowAltRight className="ml-2 h-6 w-8" />
                </QuizNavigationButton>
            )}
        </div>
    );
}
