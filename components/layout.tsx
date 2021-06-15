import { ReactElement, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Meta from './meta';
import { Header } from './header';
import dynamic from 'next/dynamic';

interface LayoutProps {
    type?: 'HOME' | 'BLOG';
    children: ReactNode;
    headerSticky?: boolean;
}

// https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
// Since Footer includes GMAIl Icon which is rendered conditinally based on client
// browers we are skipping the SSR for Footer
const RenderFooterWithNoSSR = dynamic(() => import('./footer'), { ssr: false });

function Layout({ type, headerSticky = false, children }: LayoutProps): ReactElement {
    const isBlog = type === 'BLOG';
    const isHome = type === 'HOME';
    const containerWidth = isBlog
        ? [null, null, '95%', '80%', '800px']
        : [null, null, '95%', '80%'];

    return (
        <Box>
            <Meta />
            <Header home={isHome} headerSticky={headerSticky} />
            <Container as="main" maxW={containerWidth} minH="80vh" mt={!isHome ? '120px' : null}>
                {children}
            </Container>
            <RenderFooterWithNoSSR />
        </Box>
    );
}

export { Layout };
