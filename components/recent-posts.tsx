import { Flex, Box, useColorModeValue, Icon, HStack, chakra } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Card } from 'components/card';
import NextLink from 'next/link';
import { ChakraLink } from 'components/chakra-link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Post from 'types/post';

interface RecentPostsProps {
    recentPosts: Post[];
}

function RecentPosts({ recentPosts }: RecentPostsProps) {
    const postsBackgroundColor = useColorModeValue('#EDF7FA', 'gray.800');
    return (
        <Box
            width="100vw"
            background={postsBackgroundColor}
            position="relative"
            left="calc(-50vw + 49%)">
            <Box
                height={['700px', null, null, null, '400px']}
                mt={['3', null, null, null, '1']}
                maxW={[null, null, '95%', '80%']}
                px="1rem"
                mx="auto">
                <Flex
                    pt="5"
                    px="7"
                    justifyContent={['center', null, null, null, 'space-between']}
                    h="52px">
                    <Heading fontSize="xl" textAlign="start">
                        Recent Posts
                    </Heading>
                    <NextLink href="/blog" passHref>
                        <ChakraLink display={['none', null, null, null, 'block']} fontSize="xl">
                            View All
                            <Icon as={FaLongArrowAltRight} w="8" h="6" ml="1" />
                        </ChakraLink>
                    </NextLink>
                </Flex>
                <Flex
                    height={['600px', null, null, null, '350px']}
                    className="posts-container"
                    direction={['column', null, null, null, 'row']}
                    justifyContent={['space-around']}
                    alignItems={['center']}>
                    {recentPosts.map((post) => {
                        return (
                            <NextLink
                                as={`/blog/${post.slug}`}
                                key={post.slug}
                                href="/blog/[slug]"
                                passHref>
                                <chakra.a
                                    _hover={{ textDecoration: 'none' }}
                                    width={{ xs: '100%', xl: '50%' }}>
                                    <Card title={post.title} excerpt={post.excerpt} />
                                </chakra.a>
                            </NextLink>
                        );
                    })}
                </Flex>
                <NextLink href="/blog" passHref>
                    <ChakraLink
                        position="absolute"
                        left="43%"
                        display={['block', null, null, null, 'none']}
                        fontSize="xl">
                        <HStack>
                            <Box>View All</Box>
                            <Icon as={FaLongArrowAltRight} w="10" h="8" ml="1" />
                        </HStack>
                    </ChakraLink>
                </NextLink>
            </Box>
        </Box>
    );
}

export { RecentPosts };
