import * as React from 'react';
import { ComponentWithChildren } from './utils';

export function CardWrapper({ children }: ComponentWithChildren) {
    return <div className="quizWrapper flex flex-col content-start rounded-md p-8">{children}</div>;
}
