// Source: https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
// /src/components/VisuallyHidden.js
import React from 'react';

const VisuallyHidden = ({
    children,
    ...delegated
}: {
    children: React.ReactNode;
    delegated?: React.HTMLAttributes<HTMLSpanElement>;
}) => {
    const [forceShow, setForceShow] = React.useState(false);

    React.useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            const handleKeyDown = (ev) => {
                if (ev.key === 'Alt') {
                    setForceShow(true);
                }
            };

            const handleKeyUp = (ev) => {
                if (ev.key === 'Alt') {
                    setForceShow(false);
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, []);

    if (forceShow) {
        return <>{children}</>;
    }

    return (
        <span className="sr-only" {...delegated}>
            {children}
        </span>
    );
};

export default VisuallyHidden;
