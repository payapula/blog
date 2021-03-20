import React, { ReactElement, ReactNode } from 'react';
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
    MenuItem,
    HStack,
    CSSObject
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'utils/hooks';
import { Icon } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';

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
    const isLessThan768 = useMediaQuery(650);

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
            <Container as="main" maxW={[null, null, '95%', '80%']}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

function Footer() {
    return (
        <Box height="190px">
            <Flex
                as="footer"
                height="140px"
                justify="space-around"
                align="center"
                direction="column"
                mt="5">
                <HStack justify="space-between" w="200px">
                    <SocialIcons icon={FaFacebookF} hover={{ color: '#4267B2' }} />
                    <SocialIcons icon={FaTwitter} hover={{ color: '#1DA1F2' }} />
                    <SocialIcons icon={FaLinkedin} hover={{ color: '#0e76a8' }} />
                </HStack>
                <Text>Copyright © 2021 All rights reserved</Text>
            </Flex>
        </Box>
    );
}

const SocialIcons = ({ icon, hover }: { icon: IconType; hover: CSSObject }) => (
    <Icon as={icon} w="10" h="10" cursor="pointer" _hover={hover} />
);

export { Layout };
