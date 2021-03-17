/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Button, Flex, Box, Text, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../mycomponents/Layout';
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';

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
                    <Box display={[null, null, null, null, 'none']}>
                        <Image
                            src="https://source.unsplash.com/_7LbC5J-jw4/150x150"
                            alt="Top of the author"
                            width={180}
                            height={180}
                            css={css`
                                border-radius: 50%;
                            `}
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
                        <Image
                            src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                            alt="Bottom of the author"
                            width={500}
                            height={500}
                            css={css`
                                border-radius: 50%;
                            `}
                        />
                    </Box>
                </Flex>
            </Box>
        </Layout>
    );
};

export default Index;
