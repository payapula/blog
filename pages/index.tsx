/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Button, Flex, Box, Text, Stack, chakra, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../mycomponents/Layout';
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';

const ChakraImage = chakra(Image, {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldForwardProp: (prop) => {
        return true;
    }
});

const Index = (): ReactElement => {
    return (
        <Layout>
            {/* Till 960px -> 80vh is maintained,  after that 70vh is maintained*/}
            <Box className="box-shape" height={['80vh', null, null, null, '70vh']}>
                <Flex
                    direction={['column', null, null, null, 'row']}
                    align="center"
                    justify="space-evenly"
                    height="100%">
                    <Box
                        display={[null, null, null, null, 'none']}
                        css={css`
                            @media (orientation: landscape) {
                                border: 1px solid red;
                                width: 100px !important;
                                height: 100px !important;
                            }
                        `}>
                        <ChakraImage
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
                            fontSize={['xl', null, '2xl', '3xl']}
                            maxW="23rem"
                            textAlign={['center', null, null, null, 'start']}>
                            Hi, I&apos;m Bharathi Kannan, Frontend Engineer
                        </Heading>
                        <Text
                            fontSize={['sm', null, 'md', 'lg']}
                            align={['center', null, null, null, 'start']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar
                            ac eros in vestibulum. Vivamus et justo vitae nibh porttitor tempor. In
                            ac vehicula neque. Pellentesque pretium volutpat sem ut laoreet. Ut
                            tempus efficitur nibh id imperdiet.
                        </Text>
                        <Button colorScheme="linkedin" width={180}>
                            Download Resume
                        </Button>
                    </Stack>
                    <Box display={['none', null, null, null, 'block']}>
                        <ChakraImage
                            src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                            alt="Bottom of the author"
                            width={500}
                            height={500}
                            borderRadius="50%"
                        />
                    </Box>
                </Flex>
            </Box>
            <Box height={['650px', null, null, null, '400px']} mt={['3', null, null, null, '1']}>
                <Flex justifyContent={['center', null, null, null, 'space-between']}>
                    <Heading
                        fontSize={['md', null, null, 'md']}
                        fontWeight="medium"
                        textAlign="start">
                        Recent Posts
                    </Heading>
                    <Text color="teal" display={['none', null, null, null, 'block']}>
                        View All
                    </Text>
                </Flex>
                <Flex
                    height={['600px', null, null, null, '350px']}
                    className="posts-container"
                    direction={['column', null, null, null, 'row']}
                    justifyContent={['space-around']}
                    alignItems={['center']}>
                    <DisplayCard />
                    <DisplayCard />
                </Flex>
            </Box>
        </Layout>
    );
};

function DisplayCard(): ReactElement {
    return (
        <Box className="card-container" width={['95%', null, null, null, '45%']}>
            <Flex
                border="1px"
                direction="column"
                height="250px"
                justifyContent="space-between"
                borderRadius="4">
                <Heading
                    fontSize={['2xl', null, null, 'xl']}
                    fontWeight="extrabold"
                    textAlign="start">
                    How to use React Context effectively
                </Heading>
                <HStack>
                    <Text>12 FEB 2020</Text>
                    <Text>| Design, Pattern</Text>
                </HStack>
                <Text fontSize={['md', null, 'lg', 'xl']} noOfLines={[4, null, 5]}>
                    Nam vel lacus id ligula convallis interdum. Fusce rhoncus orci a magna tempus
                    maximus. Pellentesque eget dictum leo, in elementum orci. Maecenas sit amet
                    tempor magna. Cras eu arcu sagittis, accumsan metus sit amet.
                </Text>
            </Flex>
        </Box>
    );
}

export default Index;
