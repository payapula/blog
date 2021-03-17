/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Button, Flex, Box, Text, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../mycomponents/Layout';
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { mq } from 'styles/theme';

const Index = (): ReactElement => {
    return (
        <Layout>
            <Box height="80vh">
                <Flex
                    direction="column"
                    align="center"
                    justify="space-evenly"
                    height="100%"
                    css={{
                        [mq[3]]: {
                            flexDirection: 'row'
                        }
                    }}>
                    <Box
                        css={{
                            [mq[3]]: {
                                display: 'none'
                            }
                        }}>
                        <Image
                            src="https://source.unsplash.com/random/150x150"
                            alt="Top of the author"
                            width={180}
                            height={180}
                            css={css`
                                border-radius: 50%;
                            `}
                        />
                    </Box>
                    <Stack
                        align="center"
                        height="260"
                        justifyContent="space-between"
                        css={{
                            [mq[3]]: {
                                alignItems: 'start'
                            }
                        }}>
                        <Heading
                            as="h1"
                            fontSize={[null, 'xl', '2xl', '3xl']}
                            maxW="23rem"
                            textAlign="center"
                            css={{
                                [mq[3]]: {
                                    textAlign: 'start'
                                }
                            }}>
                            Hi, I&apos;m Bharathi Kannan, Frontend Engineer
                        </Heading>
                        <Text
                            fontSize={[null, 'sm', 'md', 'lg']}
                            align="center"
                            css={{
                                [mq[3]]: {
                                    textAlign: 'start'
                                }
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar
                            ac eros in vestibulum. Vivamus et justo vitae nibh porttitor tempor. In
                            ac vehicula neque. Pellentesque pretium volutpat sem ut laoreet. Ut
                            tempus efficitur nibh id imperdiet.
                        </Text>
                        <Button colorScheme="linkedin" width={180}>
                            Download Resume
                        </Button>
                    </Stack>
                    <Box
                        css={{
                            display: 'none',
                            [mq[3]]: {
                                display: 'block'
                            }
                        }}>
                        <Image
                            src="https://source.unsplash.com/random/600x600"
                            alt="Bottom of the author"
                            width={650}
                            height={650}
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
