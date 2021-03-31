import React, { ReactElement, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Meta from './meta';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
    type?: 'HOME' | 'BLOG';
    children: ReactNode;
}

function Layout({ type, children }: LayoutProps): ReactElement {
    const isBlog = type === 'BLOG';
    const containerWidth = isBlog
        ? [null, null, '95%', '80%', '800px']
        : [null, null, '95%', '80%'];
    return (
        <Box>
            <Meta />
            <Header home={type === 'HOME'} />
            <Container as="main" maxW={containerWidth} minH="80vh">
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export { Layout };
