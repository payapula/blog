import {
    Box,
    Flex,
    HStack,
    SystemStyleObject,
    Icon,
    useColorModeValue,
    Link,
    Button,
    useToast,
    VisuallyHidden,
    chakra
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import React, { ReactElement } from 'react';
import { SiGmail } from 'react-icons/si';
import siteConfig from 'configs/site-configs';
import { ChakraLink } from './chakra-link';

interface IconLinkProps {
    href: string;
    children: React.ReactNode;
    isExternal?: boolean;
}

const IconLink = ({ href, children, isExternal = false }: IconLinkProps) => (
    <Link
        href={href}
        isExternal={isExternal}
        sx={{
            borderRadius: '4px'
        }}>
        {children}
    </Link>
);

function GMAIL() {
    const [isAppleDevice, setIsAppleDevice] = React.useState(false);
    const toast = useToast();

    React.useEffect(() => {
        // iOS doesn't easily let you copy to clipboard, hence navigating those users
        // directly to Default Mail App
        setIsAppleDevice(!!navigator.userAgent.match(/ipad|ipod|iphone/i));
    }, []);

    if (isAppleDevice) {
        return (
            <IconLink href={`mailto:${siteConfig.general.authorEmail}`}>
                <VisuallyHidden>Send Email to Bharathi Kannan</VisuallyHidden>
                <SocialIcons
                    icon={SiGmail}
                    hover={{ color: '#ea4335' }}
                    ariaLabel="Logo of Gmail"
                />
            </IconLink>
        );
    }

    return (
        <Button
            width={0}
            height={'auto'}
            background="transparent"
            _hover={{
                background: 'transparent'
            }}
            _active={{
                background: 'transparent'
            }}
            onClick={() => {
                navigator.clipboard.writeText(siteConfig.general.authorEmail);
                toast({
                    title: 'Email ID Copied!',
                    position: 'top-left',
                    description:
                        'Email Address copied to clipboard. Paste it in your favorite mail client to send out an email!',
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                });
            }}>
            <VisuallyHidden>Copy Bharathi Kannan&apos;s Email address</VisuallyHidden>
            <SocialIcons icon={SiGmail} hover={{ color: '#ea4335' }} ariaLabel="Logo of Gmail" />
        </Button>
    );
}

function Footer(): ReactElement {
    const postsBackgroundColor = useColorModeValue('#EDF7FA', 'gray.800');
    return (
        <Box
            as="footer"
            height="150px"
            width="100vw"
            background={postsBackgroundColor}
            position="relative"
            left="calc(-50vw + 49%)">
            <Flex height="140px" justify="space-around" align="center" direction="column" mt="10">
                <HStack justify="space-between" w="200px" mt="5">
                    <GMAIL />
                    <IconLink href={siteConfig.general.twitter} isExternal>
                        <VisuallyHidden>Open Twitter Profile of Bharathi Kannan</VisuallyHidden>
                        <SocialIcons
                            icon={FaTwitter}
                            hover={{ color: '#1DA1F2' }}
                            ariaLabel="Logo of Twitter"
                        />
                    </IconLink>
                    <IconLink href={siteConfig.general.linkedIn} isExternal>
                        <VisuallyHidden>Open LinkedIn Profile of Bharathi Kannan</VisuallyHidden>
                        <SocialIcons
                            icon={FaLinkedin}
                            hover={{ color: '#0e76a8' }}
                            ariaLabel="Logo of LinkedIn"
                        />
                    </IconLink>
                </HStack>
                <ChakraLink ml={3} href={siteConfig.general.github}>
                    <chakra.span role="img" aria-label="Heart" mr="2">
                        ❤️
                    </chakra.span>
                    Open sourced on Github
                    <chakra.span role="img" aria-label="Heart" ml="2">
                        ❤️
                    </chakra.span>
                </ChakraLink>
            </Flex>
        </Box>
    );
}

interface SocialIconsProps {
    icon: IconType;
    hover: SystemStyleObject;
    ariaLabel: string;
}

const SocialIcons = ({ icon, hover, ariaLabel }: SocialIconsProps) => (
    <Icon
        as={icon}
        w="8"
        h="8"
        cursor="pointer"
        _hover={hover}
        color={useColorModeValue(hover.color as string, 'currentColor')}
        aria-label={ariaLabel}
    />
);

export default Footer;
