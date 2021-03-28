import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import PostType from 'types/post';
import Cover from 'types/cover';
import React, { ReactElement } from 'react';
import { Layout } from 'mycomponents/layout';
import { Text, Box, Heading } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MDXComponents } from 'mycomponents/mdx/components';
import { NextSeo } from 'next-seo';
import { MdxRemote } from 'next-mdx-remote/types';
import Image from 'next/image';
import NextLink from 'next/link';
import { ChakraLink } from 'mycomponents/chakra-link';

type Props = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
};

const Post = ({ post }: Props): ReactElement => {
    const { title, description, ogImage, cover, content } = post;
    return (
        <Layout>
            <article>
                <Head>
                    <title>{title} | Bharathi Kannan</title>
                </Head>
                <NextSeo
                    title={title}
                    description={description}
                    openGraph={{
                        title: title,
                        description: description,
                        type: 'website',
                        images: [
                            {
                                url: ogImage.url,
                                alt: ogImage.alt
                            }
                        ]
                    }}
                />
                <PostHeader title={title} />
                <CoverImage cover={cover} />
                <PostBody content={content} />
            </article>
        </Layout>
    );
};

const components = {
    ...MDXComponents
};

interface PostHeaderProps {
    title: string;
}

function PostHeader({ title }: PostHeaderProps): ReactElement {
    return (
        <Heading
            as="h1"
            fontSize={['2xl', null, null, '4xl']}
            fontWeight="bold"
            textAlign="center"
            mt="7">
            {title}
        </Heading>
    );
}

interface CoverImageProps {
    cover: Cover;
}
function CoverImage({ cover }: CoverImageProps) {
    return (
        <Box mt={8}>
            <Image src={cover.src} alt={cover.alt} width={1400} height={700} priority />
            <Text align="center">
                Photo By
                <NextLink href={cover.author.url} passHref>
                    <ChakraLink ml={1}>{cover.author.name}</ChakraLink>
                </NextLink>
            </Text>
        </Box>
    );
}

interface PostBodyProps {
    content: MdxRemote.Source;
}

function PostBody({ content }: PostBodyProps): ReactElement {
    const hydratedContent = hydrate(content, { components });
    return <Box mt={10}>{hydratedContent}</Box>;
}

export default Post;

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'description',
        'ogImage',
        'cover',
        'slug',
        'content'
    ]);

    const mdxSource = await renderToString(post.content, { components });

    return {
        props: {
            post: {
                ...post,
                content: mdxSource
            }
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    slug: posts.slug
                }
            };
        }),
        fallback: false
    };
};
