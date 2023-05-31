import { ReactElement, ReactNode } from 'react';
import {
    Box,
    Center,
    Flex,
    Text,
    Spacer,
    IconButton,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue
} from '@chakra-ui/react';
import { ChakraLink } from 'components/chakra-link';
import NextLink from 'next/link';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'utils/hooks';
import { AuthorAvatar } from './author-avatar';
import { useRouter } from 'next/router';

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
        <Center w="100px" as="nav" aria-label={ariaLabel}>
            <Flex
                h="32px"
                justify="center"
                w="80px"
                borderRadius="4px"
                color={useColorModeValue(
                    isActive ? 'teal.700' : 'initial',
                    isActive ? 'teal.200' : 'initial'
                )}
                background={useColorModeValue(
                    isActive ? 'teal.50' : 'initial',
                    isActive ? 'link.active' : 'initial'
                )}>
                <NextLink href={href} passHref>
                    <ChakraLink fontSize="xl" fontWeight="bold" isActive={isActive}>
                        {children}
                    </ChakraLink>
                </NextLink>
            </Flex>
        </Center>
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
                    <Text fontSize="lg" fontWeight="bold">
                        {children}
                    </Text>
                </MenuItem>
            </ChakraLink>
        </NextLink>
    );
}

function Header({ home, headerSticky }: { home: boolean; headerSticky: boolean }): ReactElement {
    const isLessThan768 = useMediaQuery(650);

    let headerStyles;

    if (home) {
        headerStyles = {
            position: 'inherit',
            top: '0'
        };
    } else {
        headerStyles = {
            position: 'fixed',
            width: '100%',
            top: headerSticky ? '0' : '-85px',
            transition: 'all 300ms ease-in'
        };
    }

    return (
        <Box
            as="header"
            width="100%"
            background={useColorModeValue('white', 'gray.800')}
            borderBottom={home ? 'none' : '1px'}
            zIndex={10000}
            sx={headerStyles}>
            <Flex w="100%" h="80px" alignItems="center">
                <NextLink href="/" passHref>
                    <Flex as="a" align="center" ml="5" w="220px" justify="space-between">
                        {!home && <AuthorAvatar size={55} />}{' '}
                        <Text fontSize={home ? '2xl' : 'xl'}>Bharathi Kannan</Text>
                    </Flex>
                </NextLink>
                <Spacer />
                <ToggleIconButton />
                {isLessThan768 ? (
                    <Box mr="5" ml="auto">
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton
                                        isActive={isOpen}
                                        as={IconButton}
                                        colorScheme="teal"
                                        aria-label="Menu Button"
                                        icon={
                                            isOpen ? <CloseIcon /> : <HamburgerIcon />
                                        }></MenuButton>
                                    <MenuList>
                                        <MobileMenuItem href="/blog">Blog</MobileMenuItem>
                                        <MobileMenuItem href="/quiz">Quiz</MobileMenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </Box>
                ) : (
                    <>
                        <NavLink href="/blog" ariaLabel="Blog">
                            Blog
                        </NavLink>
                        <NavLink href="/quiz" ariaLabel="Quiz">
                            Quiz
                        </NavLink>
                    </>
                )}
            </Flex>
        </Box>
    );
}

export { Header };
