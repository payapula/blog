import { ReactElement, ReactNode } from 'react';
import {
    Box,
    Center,
    Container,
    Flex,
    Text,
    Spacer,
    Link,
    IconButton,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'utils/hooks';

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
    return (
        <Box w="100px">
            <Center h="100%">
                <Link>
                    <Text fontSize="xl" fontWeight="bold">
                        {children}
                    </Text>
                </Link>
            </Center>
        </Box>
    );
}

interface MobileMenuItemProps {
    children: ReactNode;
}

function MobileMenuItem({ children }: MobileMenuItemProps) {
    return (
        <MenuItem h="50px">
            <Text fontSize="lg" fontWeight="bold">
                {children}
            </Text>
        </MenuItem>
    );
}

function CustomHeader() {
    const isLessThan768 = useMediaQuery(768);

    return (
        <Box as="header">
            <Flex w="100%" h="80px" alignItems="center">
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
                                        icon={
                                            isOpen ? <CloseIcon /> : <HamburgerIcon />
                                        }></MenuButton>
                                    <MenuList>
                                        <MobileMenuItem>Works</MobileMenuItem>
                                        <MobileMenuItem>Blog</MobileMenuItem>
                                        <MobileMenuItem>Contact</MobileMenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </Box>
                ) : (
                    <>
                        <NavLink>Works</NavLink>
                        <NavLink>Blog</NavLink>
                        <NavLink>Contact</NavLink>
                    </>
                )}
            </Flex>
        </Box>
    );
}

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
    return (
        <Box>
            <CustomHeader />
            <Container as="main">{children}</Container>
            <Box as="footer">Footer</Box>
        </Box>
    );
}

export { Layout };
