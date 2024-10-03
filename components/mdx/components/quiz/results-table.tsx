import * as React from 'react';
import {
    Flex,
    useColorModeValue,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stat,
    StatLabel,
    StatNumber
} from '@chakra-ui/react';
import { QuizNavigationButton } from './quiz-navigation-button';
import { RepeatIcon } from '@chakra-ui/icons';
import { QuizFeedback } from './quiz-feeback';

interface ResultsTableProps {
    totalQuestions: number;
    correctAnswers: number;
    resetQuiz: () => void;
}

export function ResultsTable({ totalQuestions, correctAnswers, resetQuiz }: ResultsTableProps) {
    const score = correctAnswers > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const bgTotal = useColorModeValue('gray.50', 'whiteAlpha.100');

    return (
        <Flex flexDir="column" alignItems="center">
            <TableContainer maxWidth="700px" margin="auto" width="100%">
                <Table variant="simple">
                    <TableCaption placement="top">Quiz Results</TableCaption>
                    <Thead>
                        <Tr>
                            <Th padding={4}>Data</Th>
                            <Th isNumeric>Number</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Number of Questions</Td>
                            <Td isNumeric>{totalQuestions}</Td>
                        </Tr>
                        <Tr>
                            <Td>Number of Correct Answers</Td>
                            <Td isNumeric>{correctAnswers}</Td>
                        </Tr>
                        <Tr fontWeight="bold" backgroundColor={bgTotal}>
                            <Td>Percentage</Td>
                            <Td isNumeric>{score} %</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Stat display="flex" justifyContent="center" marginTop={12}>
                <Flex flexDir="column" alignItems="center">
                    <StatLabel>Your score</StatLabel>
                    <StatNumber>{score} %</StatNumber>
                </Flex>
            </Stat>
            <QuizNavigationButton className="mt-12 w-[38%]" onClick={resetQuiz}>
                <RepeatIcon w={8} /> Restart Quiz
            </QuizNavigationButton>
            <QuizFeedback />
        </Flex>
    );
}
