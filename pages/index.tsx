/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Button, Flex, Box, Text, Stack, useColorModeValue, Icon, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../mycomponents/Layout';
import { Heading } from '@chakra-ui/react';
import { ChakraNextImage } from 'mycomponents/ChakraNextImage';
import { Card } from 'mycomponents/Card';
import NextLink from 'next/link';
import { ChakraLink } from 'mycomponents/ChakraLink';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Index = (): ReactElement => {
    const postsBackgroundColor = useColorModeValue('#EDF7FA', 'gray.800');
    const viewAllColor = useColorModeValue('#2c04ff', 'white');

    return (
        <Layout home>
            {/* Till 960px -> 80vh is maintained,  after that 70vh is maintained*/}
            <Flex
                height={{ xs: '80vh', lg: '70vh' }}
                direction={{ xs: 'column', lg: 'row' }}
                align="center"
                justify="space-evenly">
                <Box
                    display={{ lg: 'none' }}
                    css={css`
                        @media (orientation: landscape) {
                            border: 1px solid red;
                            width: 150px !important;
                            height: 150px !important;
                        }
                    `}>
                    <ChakraNextImage
                        src="https://source.unsplash.com/_7LbC5J-jw4/150x150"
                        alt="Top of the author"
                        width={180}
                        height={180}
                        borderRadius="50%"
                    />
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar ac
                        eros in vestibulum. Vivamus et justo vitae nibh porttitor tempor. In ac
                        vehicula neque. Pellentesque pretium volutpat sem ut laoreet. Ut tempus
                        efficitur nibh id imperdiet.
                    </Text>
                    <Button colorScheme="linkedin" width={180}>
                        Download Resume
                    </Button>
                </Stack>
                <Box display={{ xs: 'none', lg: 'block' }}>
                    <ChakraNextImage
                        src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                        alt="Bottom of the author"
                        width={500}
                        height={500}
                        borderRadius="50%"
                    />
                </Box>
            </Flex>
            {/* Extra Box for styling */}
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
                        justifyContent={['center', null, null, null, 'space-between']}>
                        <Heading fontSize="xl" fontWeight="bold" textAlign="start">
                            Recent Posts
                        </Heading>
                        <NextLink href="/blog" passHref>
                            <ChakraLink
                                color={viewAllColor}
                                fontSize="md"
                                display={['none', null, null, null, 'block']}
                                _hover={{ borderBottom: '1px' }}>
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
                            color={viewAllColor}
                            fontSize="xl"
                            position="absolute"
                            left="43%"
                            _hover={{ borderBottom: '1px' }}
                            display={['block', null, null, null, 'none']}>
                            <HStack>
                                <Box>View All</Box>
                                <Icon as={FaLongArrowAltRight} w="10" h="8" ml="1" />
                            </HStack>
                        </ChakraLink>
                    </NextLink>
                </Box>
            </Box>
        </Layout>
    );
};

export default Index;
