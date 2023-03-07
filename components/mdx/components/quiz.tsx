import * as React from 'react';
import { MDXComponents } from './index';
import { Children } from 'react';
import { Box, Radio, RadioGroup, Container, Flex, Button } from '@chakra-ui/react';

function Question({ children, number }) {
    return (
        <div>
            <p>Number {number}</p>
            {children}
        </div>
    );
}

// Should manage individual question / answer state
function QuestionSet({ children }) {
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
            <Radio size="md" value={index.toString()}>
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

    const isCorrect = validAnswer.current === value;

    return (
        <Flex
            direction={'column'}
            justifyContent="flex-start"
            padding={'2'}
            borderRadius="4"
            border={'1px'}>
            {Question}
            {ChoisesWithAdditionalProps}
            <Button onClick={() => setAnswerSubmitted(true)} disabled={!value}>
                Submit
            </Button>
            {answerSubmitted ? isCorrect ? <div>Correct</div> : <p>Incorrect!</p> : null}
            {answerSubmitted ? Answer : null}
        </Flex>
    );
}

function Choise({ children }) {
    return <div>{children}</div>;
}

function Choises({ children, value, setValue, choiseElements }) {
    return (
        <RadioGroup name="form-name" onChange={setValue} value={value}>
            <Flex direction={'column'}>{choiseElements}</Flex>
        </RadioGroup>
    );
}

const Dummy = ({ isAnswer = false, ...rest }): React.ReactElement => <div {...rest} />;

// Should manage all question and answer state: Should be giving final results
function Card({ children }: { children: React.ReactNode }) {
    return <Container maxW={'700px'}>{children}</Container>;
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
