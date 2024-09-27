import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode;
    className?: string;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                `focus:focus-outline flex h-10 min-w-10 items-center justify-center rounded bg-gray-200 pe-4 ps-4 dark:bg-gray-700`,
                className
            )}
            {...props}>
            {children}
        </button>
    );
}
