import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * tw-TODO
 */
export const ToggleThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <button
                className="rounded bg-blue-500 px-2 py-1 dark:bg-blue-200"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme}
            </button>
            {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select> */}
        </>
    );
};
