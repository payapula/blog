import { AppProps } from 'next/app';
// import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';
import Head from 'next/head';
import { ReactElement } from 'react';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
