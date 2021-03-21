/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactElement, ReactNode } from 'react';
import {
    Box,
    Center,
    Container,
    Flex,
    Text,
    Spacer,
    IconButton,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    CSSObject,
    useColorModeValue
} from '@chakra-ui/react';
import { ChakraLink } from 'mycomponents/ChakraLink';
import NextLink from 'next/link';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'utils/hooks';
import { Icon } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ChakraNextImage } from 'mycomponents/ChakraNextImage';

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
                <NextLink href="/blog" passHref>
                    <ChakraLink fontSize="xl" fontWeight="bold">
                        {children}
                    </ChakraLink>
                </NextLink>
            </Center>
        </Box>
    );
}

interface MobileMenuItemProps {
    children: ReactNode;
}

function MobileMenuItem({ children }: MobileMenuItemProps) {
    return (
        <NextLink href="/blog" passHref>
            <ChakraLink>
                <MenuItem h="50px">
                    <Text fontSize="lg" fontWeight="bold">
                        {children}
                    </Text>
                </MenuItem>
            </ChakraLink>
        </NextLink>
    );
}

function CustomHeader({ home }: { home: boolean }) {
    const isLessThan768 = useMediaQuery(650);

    // tried Glassmorphism
    // const { colorMode } = useColorMode();
    // const backGround =
    //     colorMode === 'dark'
    //         ? 'background: rgba(26, 33, 45, 0.60);  border-bottom: 1px solid rgba(255, 255, 255, 0.18);'
    //         : 'background: rgba(255, 253, 253, 0.6);  border-bottom: 1px solid rgba(0, 0, 0, 0.18);';
    return (
        <Box
            as="header"
            position={home ? 'inherit' : 'sticky'}
            background={useColorModeValue('white', 'gray.800')}
            borderBottom={home ? 'none' : '1px'}
            top="0"
            // css={css`
            //     ${!home
            //         ? backGround +
            //           `box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            //     backdrop-filter: blur(20px);
            //     -webkit-backdrop-filter: blur(20px);
            //     border-radius: 10px;`
            //         : ''}
            // `}
        >
            <Flex w="100%" h="80px" alignItems="center">
                <NextLink href="/" passHref>
                    <Flex as="a" align="center" ml="5" w="220px" justify="space-between">
                        {!home && (
                            <ChakraNextImage
                                src="https://source.unsplash.com/_7LbC5J-jw4/150x150"
                                alt="Top of the author"
                                width={60}
                                height={60}
                                borderRadius="50%"
                            />
                        )}{' '}
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
    home?: boolean;
    children: ReactNode;
}

function Layout({ home, children }: LayoutProps): ReactElement {
    return (
        <Box>
            <CustomHeader home={home} />
            <Container as="main" maxW={[null, null, '95%', '80%']} minH="80vh">
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
