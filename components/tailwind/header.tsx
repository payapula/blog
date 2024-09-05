import { ReactElement, ReactNode } from 'react';
import { IconButton, useColorMode, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChakraLink } from 'components/chakra-link';
import NextLink from 'next/link';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { ToggleThemeButton } from '../toggle-theme-button';
import { AuthorAvatar } from 'components/author-avatar';
import { Spacer } from './spacer';

// tw-TODO
function ToggleIconButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            colorScheme="teal"
            aria-label="Toggle Dark Mode"
            onClick={toggleColorMode}
            mr="5"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            apply="general.focus"
        />
    );
}

interface NavLinkProps {
    children: ReactNode;
    href: string;
    ariaLabel: string;
}

function NavLink({ children, ariaLabel, href }: NavLinkProps) {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
        <nav className="flex w-[100px] items-center justify-center" aria-label={ariaLabel}>
            <div
                className={`flex h-[32px] w-[80px] justify-center rounded-[4px] ${
                    isActive ? 'bg-teal-50 text-teal-700 dark:bg-teal-800 dark:text-teal-200' : ''
                }`}>
                <NextLink href={href} passHref>
                    <ChakraLink fontSize="xl" fontWeight="bold" isActive={isActive}>
                        {children}
                    </ChakraLink>
                </NextLink>
            </div>
        </nav>
    );
}

interface MobileMenuItemProps {
    children: ReactNode;
    href: string;
}

function MobileMenuItem({ children, href }: MobileMenuItemProps) {
    return (
        <NextLink href={href} passHref>
            <ChakraLink isActive>
                <MenuItem h="50px">
                    <p className="text-lg font-bold ">{children}</p>
                </MenuItem>
            </ChakraLink>
        </NextLink>
    );
}

// tw-TODO
function MobileMenu() {
    return (
        <div className="ml-auto mr-5 md:hidden">
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            isActive={isOpen}
                            as={IconButton}
                            colorScheme="teal"
                            aria-label="Menu Button"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}></MenuButton>
                        <MenuList>
                            <MobileMenuItem href="/blog">Blog</MobileMenuItem>
                            <MobileMenuItem href="/quiz">Quiz</MobileMenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
        </div>
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
                    : `fixed w-full border-b ${
                          headerSticky
                              ? 'top-0 z-[10000] bg-white dark:bg-gray-chakra'
                              : '-top-[85px]'
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
                {/* <ToggleIconButton /> */}
                <ToggleThemeButton />
                <MobileMenu />
                <DesktopMenu />
            </div>
        </header>
    );
}

export { Header };
