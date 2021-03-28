import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import PostType from '../../types/post';
import React, { ReactElement } from 'react';
import { Layout } from 'mycomponents/layout';
import { Text, Box, Heading } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MDXComponents } from 'mycomponents/mdx/components';
import { NextSeo } from 'next-seo';
import { MdxRemote } from 'next-mdx-remote/types';

type Props = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
};

const Post = ({ post }: Props): ReactElement => {
    const { title, description, ogImage, coverImage, date, content } = post;
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout>
            {router.isFallback ? (
                <Text>Loading…</Text>
            ) : (
                <>
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
                        <PostHeader title={title} coverImage={coverImage} date={date} />
                        <PostBody content={content} />
                    </article>
                </>
            )}
        </Layout>
    );
};

const components = {
    ...MDXComponents
};

interface PostHeaderProps {
    title: string;
    coverImage?: string;
    date?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PostHeader({ title, coverImage, date }: PostHeaderProps): ReactElement {
    return (
        <Heading
            as="h1"
            fontSize={['4xl', null, null, '6xl']}
            fontWeight="bold"
            textAlign="center"
            mt="7">
            {title}
        </Heading>
    );
}

interface PostBodyProps {
    content: MdxRemote.Source;
}

function PostBody({ content }: PostBodyProps): ReactElement {
    const hydratedContent = hydrate(content, { components });
    return <Box mt="10">{hydratedContent}</Box>;
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
        'date',
        'description',
        'ogImage',
        'coverImage',
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
