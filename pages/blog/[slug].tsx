import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostType from 'types/post';
import { ReactElement, useRef, useState } from 'react';
import { Layout } from 'components/layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { PostHeader, PostCover, PostBody, PostFooter } from 'components/post';
import { useScrollPosition } from 'utils/hooks';
import { Box } from '@chakra-ui/react';
import { getBasePath } from 'utils/utils';
import { getPlaiceholder } from 'plaiceholder';
import { PlaiceHolderProps } from 'types/cover';

type PostProps = {
    post: PostType;
    componentNames: string[];
    plaiceHolder: PlaiceHolderProps;
};

const Post = ({ post, componentNames, plaiceHolder }: PostProps): ReactElement => {
    const { title, description, ogImage, cover, content, slug } = post;

    const intersectionRef = useRef<HTMLDivElement | null>(null);

    const [sticky, setSticky] = useState(true);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y;
            const difference = prevPos.y - currPos.y;

            // currPos.y would be negative once our `PostBody` starts leaving the viewport
            // Hiding our header only near the `PostBody` div
            const shouldHide = !isShow && Math.sign(currPos.y) === -1;

            // `difference` indicates how much difference it should be before we show up/hide the header
            //  => If user is scrolling top a little, we shouldn't show the header immediately
            //  => If user is scrolling bottom a little, we shouldn't hide the header immediately

            if (shouldHide && difference > 50) {
                setSticky(false);
            } else {
                if (isShow !== sticky && difference < -150) {
                    setSticky(true);
                }
            }
        },
        [sticky],
        intersectionRef,
        null,
        300
    );

    return (
        <Layout type="BLOG" headerSticky={sticky}>
            <Box as="article">
                <NextSeo
                    title={title}
                    description={description}
                    openGraph={{
                        title: title,
                        description: description,
                        type: 'website',
                        url: getBasePath(`/blog/${slug}`),
                        images: [
                            {
                                url: getBasePath(ogImage.url),
                                alt: ogImage.alt
                            }
                        ]
                    }}
                />
                <PostHeader title={title} />
                <PostCover cover={cover} plaiceHolder={plaiceHolder} />
                <PostBody
                    content={content}
                    componentNames={componentNames}
                    intersectionRef={intersectionRef}
                />
                <PostFooter slug={slug} />
            </Box>
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

    const { base64, img } = await getPlaiceholder(post.cover.src);

    const componentNames = [
        /<CodeSandbox/.test(post.content) ? 'CodeSandbox' : null,
        /<CodePen/.test(post.content) ? 'CodePen' : null,
        /<Tweet/.test(post.content) ? 'Tweet' : null
    ].filter(Boolean);

    const mdxSource = await serialize(post.content);
    return {
        props: {
            post: {
                ...post,
                content: mdxSource
            },
            componentNames,
            plaiceHolder: {
                base64,
                img
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
