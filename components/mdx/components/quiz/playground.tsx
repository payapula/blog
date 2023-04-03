import * as React from 'react';
import { Children } from 'react';
import { Container, Text, Icon } from '@chakra-ui/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { ComponentWithChildren } from './utils';
import { QuizNavigationButton } from './quiz-navigation-button';
import { ResultsTable } from './results-table';

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
        <Container maxW={'700px'} display="flex" flexDirection="column" justifyContent="center">
            <Text align={'center'} mb={2}>
                Question {questionNo} of {totalQuestions}
            </Text>
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
                    mt={4}
                    w={isFinalQuestion ? 40 : 24}
                    alignSelf="center">
                    {isFinalQuestion ? 'Show Results' : 'Next'}
                    <Icon as={FaLongArrowAltRight} w="8" h="6" ml="2" />
                </QuizNavigationButton>
            )}
        </Container>
    );
}
