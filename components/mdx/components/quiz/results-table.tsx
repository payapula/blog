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

interface ResultsTableProps {
    totalQuestions: number;
    correctAnswers: number;
}

export function ResultsTable({ totalQuestions, correctAnswers }: ResultsTableProps) {
    const score = correctAnswers > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const bgTotal = useColorModeValue('gray.50', 'whiteAlpha.100');

    return (
        <>
            <TableContainer maxWidth="700px" margin="auto">
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
        </>
    );
}
