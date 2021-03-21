import React, { ReactElement, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Meta from './meta';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
    home?: boolean;
    children: ReactNode;
}

function Layout({ home, children }: LayoutProps): ReactElement {
    return (
        <Box>
            <Meta />
            <Header home={home} />
            <Container as="main" maxW={[null, null, '95%', '80%']} minH="80vh">
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export { Layout };
