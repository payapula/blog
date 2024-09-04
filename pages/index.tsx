import { ReactElement } from 'react';
import { Layout } from '../components/layout';
import { RecentPosts } from 'components/recent-posts';
// import { HeroContent } from 'components/hero-content';
import { HeroContent } from 'components/tailwind/hero-content';
import { Quotes } from 'components/quotes';
import { Technologies } from 'components/technologies';
import Head from 'next/head';
import { History } from 'components/history';
import { GetStaticProps } from 'next';
import { getAllPosts } from 'lib/api';
import Post from 'types/post';

interface IndexProps {
    recentPosts: Post[];
}

const Index = ({ recentPosts }: IndexProps): ReactElement => {
    return (
        <Layout type="HOME">
            <Head>
                <title>Bharathi Kannan</title>
            </Head>
            <HeroContent />
            <RecentPosts recentPosts={recentPosts} />
            <Quotes />
            <Technologies />
            <History />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const recentPosts = getAllPosts(['title', 'slug', 'excerpt', 'keywords'], 2);
    return {
        props: { recentPosts }
    };
};

export default Index;
