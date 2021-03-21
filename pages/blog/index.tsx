import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Layout } from 'mycomponents/Layout';
import React, { ReactElement } from 'react';
import { ChakraLink } from 'mycomponents/ChakraLink';

export default function Index(): ReactElement {
    return (
        <Layout>
            <Heading as="h1">Welcome to Blog Posts</Heading>
            <NextLink href="/">
                <ChakraLink>Back to home</ChakraLink>
            </NextLink>
        </Layout>
    );
}
