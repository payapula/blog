import React from 'react';
import { SiSpeedtest } from 'react-icons/si';

export function QuizHighlight({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center bg-teal-100 p-4 dark:bg-teal-900">
            <SiSpeedtest className="h-8 w-8" size={'1em'} />
            <p className="mt-5 text-center">Test your understanding by taking the Quiz</p>
            <div>{children}</div>
        </div>
    );
}
