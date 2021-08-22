import React, { ReactElement } from 'react';
import { Icon, Flex, Box } from '@chakra-ui/react';
import { ChakraLink } from 'components/chakra-link';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';
import siteConfig from 'configs/site-configs';

function PostFooter({ slug }: { slug: string }): ReactElement {
    return (
        <Flex mt={5} justify="space-between" h="25px">
            <Box>
                <ChakraLink
                    href={`https://twitter.com/search?q=${siteConfig.general.siteUrl}/blog/${slug}`}>
                    Let&apos;s Discuss On Twitter
                </ChakraLink>
                <Icon
                    as={FaLocationArrow}
                    w="5"
                    h="5"
                    ml="2"
                    cursor="pointer"
                    title="Twitter"
                    color="#1ea1f2"
                />
            </Box>
            <Box ml="auto">
                <Icon as={FaGithub} w="6" h="6" cursor="pointer" title="GitHub" />
                <ChakraLink ml={3} href={`${siteConfig.general.editUrl}/${slug}.mdx`}>
                    Edit this Post On GitHub
                </ChakraLink>
            </Box>
        </Flex>
    );
}

export { PostFooter };
