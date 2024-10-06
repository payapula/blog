import * as React from 'react';
import { QuizNavigationButton } from './quiz-navigation-button';
import { FaRepeat } from 'react-icons/fa6';
import { QuizFeedback } from './quiz-feeback-tw';

interface ResultsTableProps {
    totalQuestions: number;
    correctAnswers: number;
    resetQuiz: () => void;
}

function TableData({ children, isEnd }: { children: React.ReactNode; isEnd?: boolean }) {
    return (
        <td className={`p-1 xs:p-2 sm:p-4 md:p-5 lg:p-6 ${isEnd ? 'text-end' : ''}`}>{children}</td>
    );
}

function TableRow({ children, bgStyles = '' }: { children: React.ReactNode; bgStyles?: string }) {
    return <tr className={`border-b border-solid ${bgStyles}`}>{children}</tr>;
}

export function ResultsTable({ totalQuestions, correctAnswers, resetQuiz }: ResultsTableProps) {
    const score = correctAnswers > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    return (
        <div className="flex flex-col items-center">
            <div className="m-auto block w-full max-w-3xl overflow-x-auto overflow-y-hidden whitespace-nowrap">
                <table role="table" className="w-full border-collapse indent-0">
                    <caption className="caption-top">Quiz Results</caption>
                    <thead>
                        <TableRow>
                            <th className="bg-gray-50 p-1 text-start xs:p-2 sm:p-4 md:p-5 lg:p-6 dark:bg-gray-800">
                                DATA
                            </th>
                            <th className="bg-gray-50 p-1 text-end xs:p-2 sm:p-4 md:p-5 lg:p-6 dark:bg-gray-800">
                                NUMBER
                            </th>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableData>Number of Questions</TableData>
                            <TableData isEnd>{totalQuestions}</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Number of Correct Answers</TableData>
                            <TableData isEnd>{correctAnswers}</TableData>
                        </TableRow>
                        <TableRow bgStyles="bg-gray-50 font-bold dark:bg-gray-800">
                            <TableData>Percentage</TableData>
                            <TableData isEnd>{score} %</TableData>
                        </TableRow>
                    </tbody>
                </table>
            </div>
            <div className="mt-12 flex content-center">
                <dl>
                    <div className="flex flex-col items-center">
                        <dt className="text-sm font-medium">Your score</dt>
                        <dd className="align-baseline text-2xl font-semibold proportional-nums">
                            {score} %
                        </dd>
                    </div>
                </dl>
            </div>
            <QuizNavigationButton className="mt-12 w-[38%]" onClick={resetQuiz}>
                <FaRepeat size={16} className="mr-2" /> Restart Quiz
            </QuizNavigationButton>
            <QuizFeedback />
        </div>
    );
}
