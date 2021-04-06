import { chakra, Heading, SimpleGrid } from '@chakra-ui/react';
import { getAllPosts } from 'lib/api';
import { BlogCard } from 'mycomponents/card';
import { Layout } from 'mycomponents/layout';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Post from 'types/post';
import NextLink from 'next/link';
import Head from 'next/head';

type Props = {
    allPosts: Post[];
};

/*
  {
    title: 'Preview Mode for Static Generation',
    date: '2020-03-16T05:35:07.322Z',
    slug: 'preview',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  } 
 */

export default function Index({ allPosts }: Props): ReactElement {
    return (
        <Layout>
            <Head>
                <title>Blogs | Bharathi Kannan</title>
            </Head>
            <Heading as="h1" width="100px" mx="auto" mt="8">
                Blog
            </Heading>
            <SimpleGrid columns={[1, null, null, null, 2, 3]} mt="10" spacing={10}>
                {allPosts.map((post) => {
                    return (
                        <NextLink
                            as={`/blog/${post.slug}`}
                            key={post.slug}
                            href="/blog/[slug]"
                            passHref>
                            <chakra.a _hover={{ textDecoration: 'none' }}>
                                <BlogCard
                                    key={post.slug}
                                    title={post.title}
                                    date={post.date}
                                    excerpt={post.excerpt}
                                />
                            </chakra.a>
                        </NextLink>
                    );
                })}
            </SimpleGrid>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

    return {
        props: { allPosts }
    };
};
