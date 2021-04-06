import { Button, Flex, Box, Text, Stack, useColorModeValue, Icon, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../components/layout';
import { Heading } from '@chakra-ui/react';
import { Card } from 'components/card';
import NextLink from 'next/link';
import { ChakraLink } from 'components/chakra-link';
import { AuthorAvatar } from 'components/author-avatar';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Technologies } from 'components/technologies';
import Head from 'next/head';

const Index = (): ReactElement => {
    return (
        <Layout type="HOME">
            <Head>
                <title>Bharathi Kannan</title>
            </Head>
            <HeroContent />
            <RecentPosts />
            <Technologies />
        </Layout>
    );
};

function HeroContent() {
    return (
        // Till 960px -> 70vh is maintained,  after that 60vh is maintained
        <Flex
            height={{ xs: '70vh', lg: '60vh' }}
            direction={{ xs: 'column', lg: 'row' }}
            align="center"
            justify="space-evenly">
            <Box
                display={{ lg: 'none' }}
                // css={css`
                //     @media (orientation: landscape) {
                //         width: 100px !important;
                //         height: 100px !important;
                //     }
                // `}
            >
                <AuthorAvatar size={180} />
            </Box>
            <Stack
                align={['center', null, null, null, 'start']}
                height="260"
                justifyContent="space-between">
                <Heading
                    as="h1"
                    fontSize={['3xl', null, null, '30px', '35px']}
                    maxW={['23rem', null, null, '30rem']}
                    textAlign={['center', null, null, null, 'start']}>
                    Hi, I&apos;m Bharathi Kannan, Frontend Engineer
                </Heading>
                <Text
                    fontSize={['sm', null, 'md', 'lg']}
                    align={['center', null, null, null, 'start']}>
                    Tech enthusisast, who is interested in developing scalable and accessible web
                    applications. Proficient in developing applications from given business
                    requirements and efficient in maintaining existing software.
                </Text>
                <Button colorScheme="linkedin" width={180}>
                    Download Resume
                </Button>
            </Stack>
            <Box display={{ xs: 'none', lg: 'block' }}>
                <AuthorAvatar size={500} />
            </Box>
        </Flex>
    );
}

function RecentPosts() {
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
                    <Card />
                    <Card />
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

export default Index;
