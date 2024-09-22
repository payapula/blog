/**
 * Tailwind equivalent of Chakra Heading component
 */
interface HeadingProps {
    children: React.ReactNode;
}

export const defaultHeadingStyles = 'text-3xl font-bold md:text-4xl';

export function Heading({ children }: HeadingProps) {
    return <h2 className={defaultHeadingStyles}>{children}</h2>;
}
