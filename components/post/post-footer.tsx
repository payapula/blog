import React, { ReactElement } from 'react';
import { Icon, Flex, Box } from '@chakra-ui/react';
import { ChakraLink } from 'components/chakra-link';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';
import siteConfig from 'configs/site-configs';

const responsiveTwitterSize = { base: 3, md: 5 };
const responsiveGithubSize = { base: 3, md: 6 };

function PostFooter({ slug }: { slug: string }): ReactElement {
    return (
        <Flex mt={5} justify="space-between" h="25px">
            <Box textAlign="center">
                <ChakraLink
                    href={`https://twitter.com/search?q=${siteConfig.general.siteUrl}/blog/${slug}`}>
                    Let&apos;s Discuss On Twitter
                </ChakraLink>
                <Icon
                    as={FaLocationArrow}
                    w={responsiveTwitterSize}
                    h={responsiveTwitterSize}
                    ml="2"
                    cursor="pointer"
                    title="Twitter"
                    color="#1ea1f2"
                />
            </Box>
            <Box ml="auto" textAlign="center">
                <Icon
                    as={FaGithub}
                    w={responsiveGithubSize}
                    h={responsiveGithubSize}
                    cursor="pointer"
                    title="GitHub"
                />
                <ChakraLink ml={3} href={`${siteConfig.general.editUrl}/${slug}.mdx`}>
                    Edit this Post On GitHub
                </ChakraLink>
            </Box>
        </Flex>
    );
}

export { PostFooter };
