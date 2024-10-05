import * as React from 'react';
export function PageHeading({
    children,
    width = 'w-full'
}: {
    children: React.ReactNode;
    width: string;
}): React.ReactElement {
    return (
        <h1
            className={`title-gradient-light dark:title-gradient-dark mx-auto mt-8 w-[100px] text-3xl font-bold sm:text-4xl ${width}`}>
            {children}
        </h1>
    );
}
