import { cn } from '@/lib/utils';

/**
 * Tailwind equivalent of Chakra Heading component
 */
export type HeadingProps = {
    children: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, as, className = '', ...props }: HeadingProps) {
    const Comp = as ?? 'h2';
    return (
        <Comp className={cn(className)} {...props}>
            {children}
        </Comp>
    );
}
