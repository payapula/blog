import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';
import Head from 'next/head';
import { ReactElement } from 'react';
import { DefaultSeo } from 'next-seo';
import siteConfig from 'configs/site-configs';
import 'styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
    const { seo } = siteConfig;
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <DefaultSeo {...seo} />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
