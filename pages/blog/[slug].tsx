import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import PostType from 'types/post';
import { ReactElement } from 'react';
import { Layout } from 'components/layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { PostHeader, PostCover, PostBody, PostFooter } from 'components/post';

type PostProps = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
};

const Post = ({ post }: PostProps): ReactElement => {
    const { title, description, ogImage, cover, content, slug } = post;
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
                <PostCover cover={cover} />
                <PostBody content={content} />
                <PostFooter slug={slug} />
            </article>
        </Layout>
    );
};

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

    const mdxSource = await serialize(post.content);
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

export default Post;
