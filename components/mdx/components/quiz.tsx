import * as React from 'react';
import { MDXComponents } from './index';
import { Children } from 'react';
import { Box, Radio, RadioGroup, Container, Flex, Button } from '@chakra-ui/react';

function Question({ children }) {
    return <div>{children}</div>;
}

// Should manage individual question / answer state
function QuestionSet({ children, incrementValidAnswer }) {
    const [answerSubmitted, setAnswerSubmitted] = React.useState(false);
    const [value, setValue] = React.useState('');
    const validAnswer = React.useRef<string>();

    const [Question, Choises, Answer] = Children.toArray(children);

    //@ts-ignore
    const choiseElements = Children.map(Choises.props.children, (child, index) => {
        if (child.props?.isAnswer) {
            validAnswer.current = index.toString();
        }
        return (
            <Radio
                size="md"
                value={index.toString()}
                isDisabled={answerSubmitted}
                alignItems="baseline">
                {child.props.children}
            </Radio>
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
        <Flex
            direction={'column'}
            justifyContent="flex-start"
            padding={'2'}
            borderRadius="4"
            border={'1px'}>
            {Question}
            <Flex as="form" onSubmit={submitAnswer} direction="column">
                {ChoisesWithAdditionalProps}
                <Button
                    mt="20px"
                    onClick={submitAnswer}
                    disabled={!value || answerSubmitted}
                    type="submit">
                    Submit
                </Button>
            </Flex>
            {answerSubmitted ? isCorrect ? <div>Correct</div> : <p>Incorrect!</p> : null}
            {answerSubmitted ? Answer : null}
        </Flex>
    );
}

function Choise({ children }) {
    return <div>{children}</div>;
}

function Choises({ children, value, setValue, choiseElements }) {
    const totalChoises = Children.count(choiseElements);

    const choiseWithSeparator = [];
    Children.forEach(choiseElements, (child, index) => {
        choiseWithSeparator.push(child);
        if (totalChoises - 1 !== index) {
            choiseWithSeparator.push(<hr key={index} />);
        }
    });

    return (
        <RadioGroup name="form-name" onChange={setValue} value={value}>
            <Flex direction={'column'}>{choiseWithSeparator}</Flex>
        </RadioGroup>
    );
}

const Dummy = (props): React.ReactElement => <div {...props} />;

type QuizState = 'idle' | 'playing' | 'over';

// Should manage all question and answer state: Should be giving final results
function Card({ children }: { children: React.ReactNode }) {
    const [quizState, setQuizState] = React.useState<QuizState>('idle');
    const [questionNo, setQuestionNo] = React.useState(1);
    const [totalValidAnswer, setTotalValidAnswer] = React.useState(0);

    const totalQuestions = Children.count(children);

    function incrementValidAnswer() {
        setTotalValidAnswer((number) => number + 1);
    }

    const QuestionSetWithAddedProps = React.cloneElement(children[questionNo - 1], {
        incrementValidAnswer,
        /** key prop is neccessary to tell react that this is brand new instance */
        key: questionNo - 1
    });

    const isFinalQuestion = totalQuestions === questionNo;

    if (quizState === 'over') {
        const score = Math.round((totalValidAnswer / totalQuestions) * 100);

        return (
            <Container maxW={'700px'}>
                Total Questions: {totalQuestions}
                Correct Answers: {totalValidAnswer}
                Score: {score}
            </Container>
        );
    }

    return (
        <Container maxW={'700px'}>
            Question {questionNo}
            {QuestionSetWithAddedProps}
            <Button
                onClick={() => {
                    if (isFinalQuestion) {
                        return setQuizState('over');
                    }

                    setQuestionNo((n) => n + 1);
                }}>
                {isFinalQuestion ? 'Submit' : 'Next'}
            </Button>
        </Container>
    );
}

export const MDXQuizComponents = {
    ...MDXComponents,
    Card,
    Question,
    QuestionSet,
    Choises,
    Choise,
    Answer: Dummy
};
