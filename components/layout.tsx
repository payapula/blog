import { ReactElement, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Meta from './meta';
import { Header } from './header';
import Footer from 'components/footer';

interface LayoutProps {
    type?: 'HOME' | 'BLOG';
    children: ReactNode;
    headerSticky?: boolean;
}

function Layout({ type, headerSticky = false, children }: LayoutProps): ReactElement {
    const isBlog = type === 'BLOG';
    const isHome = type === 'HOME';
    const containerWidth = isBlog
        ? [null, null, '95%', '80%', '700px']
        : [null, null, '95%', '80%'];

    return (
        <Box>
            <Meta />
            <Header home={isHome} headerSticky={headerSticky} />
            <Container as="main" maxW={containerWidth} minH="80vh" mt={!isHome ? '120px' : null}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export { Layout };
