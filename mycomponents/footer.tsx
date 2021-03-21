import { Box, Flex, Text, HStack, CSSObject, Icon } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactElement } from 'react';

function Footer(): ReactElement {
    return (
        <Box height="150px">
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

export { Footer };
