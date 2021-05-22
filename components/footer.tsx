import {
    Box,
    Flex,
    Text,
    HStack,
    CSSObject,
    Icon,
    useColorModeValue,
    Link,
    Button,
    useToast,
    VisuallyHidden
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactElement } from 'react';
import { SiGmail } from 'react-icons/si';
import siteConfig from 'configs/site-configs';

const IconLink = ({ href, children, isExternal = false }) => (
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
    const toast = useToast();

    // iOS doesn't easily let you copy to clipboard, hence navigating those users
    // directly to Default Mail App
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        return (
            <IconLink href={`mailto:${siteConfig.general.authorEmail}`}>
                <VisuallyHidden>Send Email to Bharathi Kannan</VisuallyHidden>
                <SocialIcons icon={SiGmail} hover={{ color: '#ea4335' }} />
            </IconLink>
        );
    } else {
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
                <VisuallyHidden>Copy Bharathi Kannan's Email address</VisuallyHidden>
                <SocialIcons icon={SiGmail} hover={{ color: '#ea4335' }} />
            </Button>
        );
    }
}

function Footer(): ReactElement {
    const postsBackgroundColor = useColorModeValue('#EDF7FA', 'gray.800');
    return (
        <Box
            height="150px"
            width="100vw"
            background={postsBackgroundColor}
            position="relative"
            left="calc(-50vw + 49%)">
            <Flex
                as="footer"
                height="140px"
                justify="space-around"
                align="center"
                direction="column"
                mt="10">
                <HStack justify="space-between" w="200px" mt="5">
                    <GMAIL />
                    <IconLink href={siteConfig.general.twitter} isExternal>
                        <VisuallyHidden>Open Twitter Profile of Bharathi Kannan</VisuallyHidden>
                        <SocialIcons icon={FaTwitter} hover={{ color: '#1DA1F2' }} />
                    </IconLink>
                    <IconLink href={siteConfig.general.linkedIn} isExternal>
                        <VisuallyHidden>Open LinkedIn Profile of Bharathi Kannan</VisuallyHidden>
                        <SocialIcons icon={FaLinkedin} hover={{ color: '#0e76a8' }} />
                    </IconLink>
                </HStack>
                <Text>Opensourced on Github ❤️</Text>
            </Flex>
        </Box>
    );
}

const SocialIcons = ({ icon, hover }: { icon: IconType; hover: CSSObject }) => (
    <Icon
        as={icon}
        w="8"
        h="8"
        cursor="pointer"
        _hover={hover}
        color={useColorModeValue(hover.color as string, 'currentColor')}
    />
);

export default Footer;
