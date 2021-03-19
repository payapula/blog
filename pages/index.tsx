/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {
    Button,
    Flex,
    Box,
    Text,
    Stack,
    chakra,
    HStack,
    useColorModeValue
} from '@chakra-ui/react';
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
    const postsBackgroundColor = useColorModeValue('#EDF7FA', 'gray.800');
    const viewAllColor = useColorModeValue('#2c04ff', 'white');

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
                                width: 150px !important;
                                height: 150px !important;
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
                            fontSize={['xl', null, null, '30px', '35px']}
                            maxW={['23rem', null, null, '30rem']}
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
            {/* Extra Box for styling */}
            <Box
                width="100vw"
                background={postsBackgroundColor}
                position="relative"
                left="calc(-50vw + 50%)">
                <Box
                    height={['650px', null, null, null, '400px']}
                    mt={['3', null, null, null, '1']}
                    maxW={[null, null, '95%', '80%']}
                    px="1rem"
                    mx="auto">
                    <Flex
                        pt="5"
                        px="7"
                        justifyContent={['center', null, null, null, 'space-between']}>
                        <Heading fontSize="xl" fontWeight="medium" textAlign="start">
                            Recent Posts
                        </Heading>
                        <Text
                            color={viewAllColor}
                            fontSize={['md', null, null, 'lg']}
                            display={['none', null, null, null, 'block']}>
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
            </Box>
        </Layout>
    );
};

function DisplayCard(): ReactElement {
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardBorder = useColorModeValue('none', '1px');
    return (
        <Flex
            direction="column"
            height="265px"
            justifyContent="space-between"
            className="card-container"
            width={['95%', null, null, null, '45%']}
            background={cardBg}
            borderRadius="4"
            border={cardBorder}
            padding="2"
            // https://codepen.io/sdthornton/pen/wBZdXq
            css={css`
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                &:hover {
                    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
                }
            `}>
            <Heading fontSize={['2xl', null, null, 'xl']} fontWeight="extrabold" textAlign="start">
                How to use React Context effectively
            </Heading>
            <HStack>
                <Text>12 FEB 2020</Text>
                <Text>| Design, Pattern</Text>
            </HStack>
            <Text fontSize={['md', null, 'lg', 'xl']} noOfLines={[4, null, 5]}>
                Nam vel lacus id ligula convallis interdum. Fusce rhoncus orci a magna tempus
                maximus. Pellentesque eget dictum leo, in elementum orci. Maecenas sit amet tempor
                magna. Cras eu arcu sagittis, accumsan metus sit amet.
            </Text>
        </Flex>
    );
}

export default Index;
