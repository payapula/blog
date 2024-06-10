import React, { ReactElement } from 'react';
import { Icon, Flex, Box } from '@chakra-ui/react';
import { ChakraLink } from 'components/chakra-link';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';
import siteConfig from 'configs/site-configs';

const responsiveTwitterSize = { base: 3, md: 5 };
const responsiveGithubSize = { base: 3, md: 6 };

interface PostFooterProps {
    slug: string;
    dates: {
        createdDate: string;
        modifiedDate: string;
    };
}

function TimeStamp({ date, text }: { text: string; date: string }): ReactElement {
    return (
        <Box as="p" textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }}>
            {text}
            <Box as="span" fontWeight={'bold'} ml={2}>
                {date}
            </Box>
        </Box>
    );
}

function PostFooter({ slug, dates: { createdDate, modifiedDate } }: PostFooterProps): ReactElement {
    return (
        <Flex direction={'column'} mt={5}>
            <Flex justify={'space-between'}>
                <TimeStamp text="Published:" date={createdDate} />
                <TimeStamp text="Updated:" date={modifiedDate} />
            </Flex>
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
        </Flex>
    );
}

export { PostFooter };
