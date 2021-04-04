import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import PostType from 'types/post';
import Cover from 'types/cover';
import React, { ReactElement } from 'react';
import { Layout } from 'mycomponents/layout';
import { Text, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MDXComponents } from 'mycomponents/mdx/components';
import { NextSeo } from 'next-seo';
import { MdxRemote } from 'next-mdx-remote/types';
import NextLink from 'next/link';
import { ChakraLink } from 'mycomponents/chakra-link';
import { ChakraNextImage } from 'mycomponents/chakra-next-image';

type Props = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
};

const Post = ({ post }: Props): ReactElement => {
    const { title, description, ogImage, cover, content } = post;
    return (
        <Layout type="BLOG">
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
// background-image: linear-gradient(to right, #ebe371, #fc9b42, #f74252, #c6007f, #3e02ab);
// background-image: linear-gradient(to right, #bb7028, #c63e32, #c20051, #a0007d, #3e02ab);
// background-image: linear-gradient(to right, #be9a7c, #c46d5c, #c03460, #a2007f, #3e02ab);
//background-image: linear-gradient(to right, #d26472, #c73d75, #b10a82, #8b0095, #3e02ab);

// Dark

// background-image: linear-gradient(to right, #7a592a, #8e6b27, #a17f22, #b19419, #beab09);
// background-image: linear-gradient(to left, #9e6d29, #ae812b, #bc952c, #c8ab2f, #d2c234);
//background-image: linear-gradient(to left, #62e884, #88dc67, #a4ce4f, #b9c03d, #cbb135);
function PostHeader({ title }: PostHeaderProps): ReactElement {
    return (
        <Heading
            as="h1"
            fontSize={['4xl', null, null, '6xl']}
            fontWeight="bold"
            textAlign="center"
            bgClip="text"
            bgGradient={useColorModeValue(
                'linear(to-r,  #d26472, #c73d75, #b10a82, #8b0095, #3e02ab)',
                'linear(to-l, #27d152, #88dc67, #a4ce4f, #b9c03d, #cbb135)'
            )}
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
            <ChakraNextImage
                src={cover.src}
                alt={cover.alt}
                width={1400}
                height={700}
                priority
                objectFit="contain"
            />
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
