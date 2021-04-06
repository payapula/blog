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
import { ChakraLink } from 'mycomponents/chakra-link';
import NextLink from 'next/link';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'utils/hooks';
import { AuthorAvatar } from './author_avatar';
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
        />
    );
}

interface NavLinkProps {
    children: ReactNode;
}

function NavLink({ children }: NavLinkProps) {
    const router = useRouter();
    console.log(router);
    const isActive = router.pathname === '/blog';
    return (
        <Center w="100px">
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
                <NextLink href="/blog" passHref>
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
}

function MobileMenuItem({ children }: MobileMenuItemProps) {
    return (
        <NextLink href="/blog" passHref>
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

function Header({ home }: { home: boolean }): ReactElement {
    const isLessThan768 = useMediaQuery(650);

    return (
        <Box
            as="header"
            position={home ? 'inherit' : 'sticky'}
            background={useColorModeValue('white', 'gray.800')}
            borderBottom={home ? 'none' : '1px'}
            zIndex={10000}
            top="0">
            <Flex w="100%" h="80px" alignItems="center">
                <NextLink href="/" passHref>
                    <Flex as="a" align="center" ml="5" w="220px" justify="space-between">
                        {!home && <AuthorAvatar size={60} />}{' '}
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
                                        {/* <MobileMenuItem>Works</MobileMenuItem> */}
                                        <MobileMenuItem>Blog</MobileMenuItem>
                                        {/* <MobileMenuItem>Contact</MobileMenuItem> */}
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </Box>
                ) : (
                    <>
                        {/* <NavLink>Works</NavLink> */}
                        <NavLink>Blog</NavLink>
                        {/* <NavLink>Contact</NavLink> */}
                    </>
                )}
            </Flex>
        </Box>
    );
}

export { Header };
