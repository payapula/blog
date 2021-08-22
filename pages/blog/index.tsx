import { chakra, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { getAllPosts } from 'lib/api';
import { BlogCard } from 'components/card';
import { Layout } from 'components/layout';
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
    slug: 'preview',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  } 
 */

export default function Index({ allPosts }: Props): ReactElement {
    return (
        <Layout headerSticky>
            <Head>
                <title>Blogs | Bharathi Kannan</title>
            </Head>
            <Heading
                as="h1"
                width="100px"
                mx="auto"
                mt="8"
                bgClip="text"
                bgGradient={useColorModeValue(
                    'linear(to-r,  #d26472, #c73d75, #b10a82, #8b0095, #3e02ab)',
                    'linear(to-r, #c19685, #b8a178, #9eaf7b, #76bc95, #3ec4c1)'
                )}>
                Posts
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
                                <BlogCard title={post.title} excerpt={post.excerpt} />
                            </chakra.a>
                        </NextLink>
                    );
                })}
            </SimpleGrid>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'slug', 'excerpt']);

    return {
        props: { allPosts }
    };
};
