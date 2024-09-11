/**
 * Tailwind equivalent of Chakra Heading component
 */
export function Heading({ children }: { children: React.ReactNode }) {
    return <h2 className="text-3xl font-bold md:text-4xl">{children}</h2>;
}
