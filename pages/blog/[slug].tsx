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
// import { MDXEmbedProvider } from 'mdx-embed';

type Props = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Post = ({ post, morePosts, preview }: Props): ReactElement => {
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
                            <title>{post.title} | Bharathi Kannan</title>
                            <meta property="og:image" content={post.ogImage.url} />
                        </Head>

                        <PostHeader
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                        />
                        <PostBody content={post.content} />
                        {/* <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                            />
                            <PostBody content={post.content} /> */}
                    </article>
                </>
            )}
        </Layout>
    );
};

const components = {
    ...MDXComponents
};

// const provider = {
//     component: MDXEmbedProvider,
//     props: {}
// };

// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
function PostHeader({ title, coverImage, date, author }): ReactElement {
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

// eslint-disable-next-line react/prop-types
function PostBody({ content }): ReactElement {
    const hydratedContent = hydrate(content, { components });
    return (
        <Box mt="10">
            {/* <Text
                as="div"
                fontSize="3xl"
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: content }}
            /> */}
            {hydratedContent}
        </Box>
    );
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
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage'
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
