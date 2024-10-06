import { ReactElement, ReactNode } from 'react';
import { TWLink } from 'components/tailwind/link';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ToggleThemeButton } from '../toggle-theme-button';
import { AuthorAvatar } from 'components/author-avatar';
import { Spacer } from './spacer';
import { MobileMenu } from './mobile-menu';

interface NavLinkProps {
    children: ReactNode;
    href: string;
    ariaLabel: string;
}

export const activeLinkBgClasses = 'bg-teal-50 text-teal-700 dark:bg-teal-800 dark:text-teal-200';

function NavLink({ children, ariaLabel, href }: NavLinkProps) {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
        <nav className="flex w-[100px] items-center justify-center" aria-label={ariaLabel}>
            <div
                className={`flex h-[32px] w-[80px] justify-center rounded-[4px] ${
                    isActive ? activeLinkBgClasses : ''
                }`}>
                <NextLink href={href} passHref>
                    <TWLink textSize="text-xl" fontWeight="font-bold" isActive={isActive}>
                        {children}
                    </TWLink>
                </NextLink>
            </div>
        </nav>
    );
}

function DesktopMenu() {
    return (
        <div className="hidden md:flex">
            <NavLink href="/blog" ariaLabel="Blog">
                Blog
            </NavLink>
            <NavLink href="/quiz" ariaLabel="Quiz">
                Quiz
            </NavLink>
        </div>
    );
}

function Header({ home, headerSticky }: { home: boolean; headerSticky: boolean }): ReactElement {
    return (
        <header
            className={`w-full ${
                home
                    ? 'static'
                    : `fixed w-full border-b border-b-neutral-500 ${
                          headerSticky ? 'top-0 z-[2] bg-white dark:bg-gray-chakra' : '-top-[85px]'
                      } transition-all duration-300 ease-in`
            }`}>
            <div className="flex h-[80px] w-full items-center">
                <NextLink href="/" passHref>
                    <a className="ml-5 flex w-[220px] items-center justify-between">
                        {!home && <AuthorAvatar size={55} />}{' '}
                        <p className={`${home ? 'text-2xl' : 'text-xl'}`}>Bharathi Kannan</p>
                    </a>
                </NextLink>
                <Spacer />
                <ToggleThemeButton />
                <MobileMenu />
                <DesktopMenu />
            </div>
        </header>
    );
}

export { Header };
