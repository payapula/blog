import { Box, Flex, Text, HStack, CSSObject, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactElement } from 'react';

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
                    <SocialIcons icon={FaFacebookF} hover={{ color: '#4267B2' }} />
                    <SocialIcons icon={FaTwitter} hover={{ color: '#1DA1F2' }} />
                    <SocialIcons icon={FaLinkedin} hover={{ color: '#0e76a8' }} />
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
