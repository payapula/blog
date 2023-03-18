import * as React from 'react';
import { MDXComponents } from './index';
import { Children } from 'react';
import {
    Box,
    Radio,
    RadioGroup,
    Container,
    Flex,
    Button,
    useColorModeValue
} from '@chakra-ui/react';

interface ComponentWithChildren {
    children: React.ReactNode;
}

function Question({ children }: ComponentWithChildren) {
    return <>{children}</>;
}

interface QuestionSetProps {
    children: React.ReactNode;
    incrementValidAnswer: () => void;
    answerSubmitted: boolean;
    setAnswerSubmitted: (value: boolean) => void;
}

// Should manage individual question / answer state
function QuestionSet({
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
        return (
            <Radio
                size="md"
                value={index.toString()}
                isDisabled={answerSubmitted}
                minH={14}
                padding={2}>
                <Flex alignItems={'baseline'}>{child.props.children}</Flex>
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
        <CardWrapper>
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
            {answerSubmitted ? isCorrect ? <p>Correct</p> : <p>Incorrect!</p> : null}
            {answerSubmitted ? Answer : null}
        </CardWrapper>
    );
}

const getShadowForCard = (color1, color2) => `1px 1px 6px 4px ${color1}, 0 1px 1px 1px ${color2}`;

function CardWrapper({ children }: ComponentWithChildren) {
    const lightShadow = getShadowForCard('rgba(0, 0, 0, 0.12)', 'rgba(0, 0, 0, 0.24)');
    const darkShadow = getShadowForCard('rgba(255, 130, 47, 0.25)', 'rgba(95, 83, 76, 0.22)');
    const colorBoxShadow = useColorModeValue(lightShadow, darkShadow);

    const borderColor = useColorModeValue('1px solid black', '1px solid teal');
    return (
        <Flex
            direction={'column'}
            justifyContent="flex-start"
            padding={8}
            borderRadius="4"
            border={borderColor}
            boxShadow={colorBoxShadow}>
            {children}
        </Flex>
    );
}

function Choise({ children }: ComponentWithChildren) {
    return <>{children}</>;
}

interface ChoisesProps {
    value: string;
    setValue: (value: string) => void;
    choiseElements: Array<typeof Radio>;
}

const getShadowForChoise = (color1, color2) => `0px 1px 0px 2px ${color1}, 0 1px 2px 0px ${color2}`;

function Choises({ value, setValue, choiseElements }: ChoisesProps) {
    const totalChoises = Children.count(choiseElements);

    const choiseWithSeparator = [];
    Children.forEach(choiseElements, (child, index) => {
        choiseWithSeparator.push(child);
        if (totalChoises - 1 !== index) {
            choiseWithSeparator.push(
                <Box key={index} mt={2} mb={2} borderTopWidth={'1px'} borderStyle={'outset'} />
            );
        }
    });

    const lightShadow = getShadowForChoise('rgba(0, 0, 0, 0.12)', 'rgba(0, 0, 0, 0.24)');
    const darkShadow = getShadowForChoise('rgba(255, 130, 47, 0.25)', 'rgba(95, 83, 76, 0.22)');
    const colorBoxShadow = useColorModeValue(lightShadow, darkShadow);

    const bgForChoise = useColorModeValue('teal.100', 'orange.700');
    const borderForCircle = useColorModeValue('teal.700', 'orange.100');

    const bgChecked = useColorModeValue('teal.300', 'orange.500');
    return (
        <RadioGroup
            name="form-name"
            onChange={setValue}
            value={value}
            mt="4"
            sx={{
                '.chakra-radio': {
                    borderRadius: '5px',
                    boxShadow: colorBoxShadow
                },
                '.chakra-radio:hover': {
                    backgroundColor: bgForChoise
                },
                '.chakra-radio:hover .chakra-radio__control': {
                    transform: 'scale(1.5)',
                    borderColor: borderForCircle
                },
                '.chakra-radio[data-checked]': {
                    backgroundColor: bgChecked
                },
                '.chakra-radio[data-checked] .chakra-radio__control': {
                    transform: 'scale(1.5)',
                    borderColor: borderForCircle,
                    color: useColorModeValue('revert', 'initial'),
                    background: useColorModeValue('revert', 'initial')
                },
                '.chakra-radio p': {
                    mt: 0
                }
            }}>
            <Flex direction={'column'}>{choiseWithSeparator}</Flex>
        </RadioGroup>
    );
}

const Dummy = (props): React.ReactElement => <div {...props} />;

type QuizState = 'idle' | 'playing' | 'over';

// Should manage all question and answer state: Should be giving final results
function Card({ children }: ComponentWithChildren) {
    const [quizState, setQuizState] = React.useState<QuizState>('idle');
    const [questionNo, setQuestionNo] = React.useState(1);
    const [totalValidAnswer, setTotalValidAnswer] = React.useState(0);
    const [answerSubmitted, setAnswerSubmitted] = React.useState(false);

    const totalQuestions = Children.count(children);

    function incrementValidAnswer() {
        setTotalValidAnswer((number) => number + 1);
    }

    const QuestionSetWithAddedProps = React.cloneElement(children[questionNo - 1], {
        incrementValidAnswer,
        answerSubmitted,
        setAnswerSubmitted,
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
            Question {questionNo} / {totalQuestions}
            {QuestionSetWithAddedProps}
            <Button
                disabled={!answerSubmitted}
                onClick={() => {
                    if (isFinalQuestion) {
                        return setQuizState('over');
                    }
                    setAnswerSubmitted(false);
                    setQuestionNo((n) => n + 1);
                }}>
                {isFinalQuestion ? 'Show Results' : 'Next'}
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
