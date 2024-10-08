import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import { DefaultSeo } from 'next-seo';
import siteConfig from 'configs/site-configs';
import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/shadcn/sonner';

const { seo } = siteConfig;

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <DefaultSeo {...seo} />
            <ThemeProvider attribute="class" enableSystem={false}>
                <Component {...pageProps} />
                <Toaster />
            </ThemeProvider>
        </>
    );
}
