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
    useToast
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactElement } from 'react';
import { SiGmail } from 'react-icons/si';

function Footer(): ReactElement {
    const postsBackgroundColor = useColorModeValue('#EDF7FA', 'gray.800');
    const toast = useToast();
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
                            navigator.clipboard.writeText('bharathikannanv@gmail.com');
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
                        <SocialIcons icon={SiGmail} hover={{ color: '#ea4335' }} />
                    </Button>
                    <Link href="https://twitter.com/bharathispeaks" isExternal>
                        <SocialIcons icon={FaTwitter} hover={{ color: '#1DA1F2' }} />
                    </Link>
                    <Link href="https://linkedin.com/in/bharathi-kannan-80968170" isExternal>
                        <SocialIcons icon={FaLinkedin} hover={{ color: '#0e76a8' }} />
                    </Link>
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

export { Footer };
