/**
 * Tailwind equivalent of Chakra Heading component
 */
export type HeadingProps = {
    children: React.ReactNode;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;

export const defaultHeadingStyles = 'text-3xl font-bold md:text-4xl';

export function Heading({ children, as, ...props }: HeadingProps) {
    const Comp = as ?? 'h2';
    return (
        <Comp className={defaultHeadingStyles} {...props}>
            {children}
        </Comp>
    );
}
