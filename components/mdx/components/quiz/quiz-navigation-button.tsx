import * as React from 'react';
import { ComponentWithChildren } from './utils';
import { Button, ButtonProps } from '@/components/shadcn/button';

type Props = ComponentWithChildren & ButtonProps;

export function QuizNavigationButton({ children, className, ...props }: Props) {
    return (
        <Button className={className} {...props}>
            {children}
        </Button>
    );
}
