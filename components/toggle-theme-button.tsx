import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunny } from 'react-icons/io5';
import { IoMdMoon } from 'react-icons/io';
import VisuallyHidden from './tailwind/visuallyHidden';

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

    const isDark = theme === 'dark';

    return (
        <>
            <button
                className="focus:focus-outline mr-5 flex h-10 w-10 items-center justify-center rounded bg-teal-700 px-2 py-1 text-white dark:bg-teal-400 dark:text-gray-800"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}>
                <VisuallyHidden>Toggle Dark Mode</VisuallyHidden>
                {/* {isDark ? <FaSun size={20} /> : <FaMoon size={20} />} */}
                {isDark ? <IoSunny size={20} /> : <IoMdMoon size={20} />}
            </button>
            {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select> */}
        </>
    );
};
