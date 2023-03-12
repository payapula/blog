import { ChakraLink } from 'components/chakra-link';
import { Layout } from 'components/layout';
import NextLink from 'next/link';
import * as React from 'react';

export default function Quiz() {
    return (
        <Layout>
            Quiz Home
            <NextLink href="quiz/react-is-just-javascript" passHref>
                <ChakraLink fontSize="xl">React Simple Quiz</ChakraLink>
            </NextLink>
        </Layout>
    );
}
