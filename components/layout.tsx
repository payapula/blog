import { ReactElement, ReactNode } from 'react';
import Meta from './meta';
// import { Header } from './header';
import { Header } from './tailwind/header';
// import Footer from 'components/footer';
import Footer from 'components/tailwind/footer';

interface LayoutProps {
    type?: 'HOME' | 'BLOG';
    children: ReactNode;
    headerSticky?: boolean;
}

function Layout({ type, headerSticky = false, children }: LayoutProps): ReactElement {
    const isBlog = type === 'BLOG';

    return (
        <div>
            <Meta />
            <Header home={!isBlog} headerSticky={headerSticky} />
            <main
                className={`me-auto ms-auto min-h-[80vh] pe-4 ps-4 sm:max-w-[95%] md:max-w-[80%] ${
                    isBlog ? 'lg:max-w-[700px]' : ''
                }  ${isBlog ? 'mt-[120px]' : ''} `}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export { Layout };
