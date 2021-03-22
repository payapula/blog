import { Heading, SimpleGrid } from '@chakra-ui/react';
import { getAllPosts } from 'lib/api';
import { BlogCard } from 'mycomponents/card';
import { Layout } from 'mycomponents/layout';
import { GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import Post from 'types/post';

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
    console.log(allPosts);
    return (
        <Layout>
            <Heading as="h1" width="100px" mx="auto" mt="8">
                Blog
            </Heading>
            <SimpleGrid
                columns={[1, null, null, null, 2, 3]}
                mt="10"
                spacing={[10, null, null, null]}>
                {allPosts.map((post) => {
                    return (
                        <BlogCard
                            key={post.slug}
                            title={post.title}
                            date={post.date}
                            excerpt={post.excerpt}
                        />
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
