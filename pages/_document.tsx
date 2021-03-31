import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from 'styles/theme';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
