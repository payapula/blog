import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from 'styles/theme';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/roboto-v20-latin-regular.woff2"
                        as="font"
                        type="font/woff2"
                        // https://wp-rocket.me/blog/font-preloading-best-practices/
                        // If crossOrigin is not given then font would be loaded twice
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/roboto-v27-latin-700.woff2"
                        as="font"
                        type="font/woff2"
                        // https://wp-rocket.me/blog/font-preloading-best-practices/
                        // If crossOrigin is not given then font would be loaded twice
                        crossOrigin="anonymous"
                    />
                    <link rel="preconnect" href="https://vitals.vercel-insights.com"></link>
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        rel="stylesheet"></link> */}
                </Head>
                <body className="bg-white text-gray-chakra dark:bg-gray-chakra dark:text-white">
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
