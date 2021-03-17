/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../mycomponents/Layout';
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';

const Index = (): ReactElement => {
    return (
        <Layout>
            <Box height="80vh">
                <Flex direction="column" align="center" justify="space-evenly" height="100%">
                    <Box>
                        <Image
                            src="https://source.unsplash.com/random/170x170"
                            alt="Picture of the author"
                            width={170}
                            height={170}
                            css={css`
                                border-radius: 50%;
                                border: 1px solid red;
                                max-width: 170px;
                            `}
                        />
                    </Box>
                    <Heading
                        as="h1"
                        fontSize={[null, 'xl', '2xl', '3xl']}
                        // maxW={[null, null, '60%', '60%', '40%']}
                        maxW="23rem"
                        textAlign="center">
                        Hi, I&apos;m Bharathi Kannan, Web Developer
                    </Heading>
                    <Text fontSize={[null, 'sm', 'md', 'lg']} align="center" mx="6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar ac
                        eros in vestibulum. Vivamus et justo vitae nibh porttitor tempor. In ac
                        vehicula neque. Pellentesque pretium volutpat sem ut laoreet. Ut tempus
                        efficitur nibh id imperdiet.
                    </Text>
                    <Button colorScheme="linkedin" width={180}>
                        Download Resume
                    </Button>
                </Flex>
            </Box>
        </Layout>
    );
};

export default Index;
