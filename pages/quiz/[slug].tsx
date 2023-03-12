import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXQuizComponents } from 'components/mdx/components/quiz';
import { Box } from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import { getQuizBySlug } from 'lib/quiz.api';
import { Layout } from 'components/layout';

interface QuizProps {
    slug: string;
    content: MDXRemoteSerializeResult;
}

export default function Quiz({ slug, content }: QuizProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <Box mt={10} className="quiz-global-styles">
                <MDXRemote {...content} components={MDXQuizComponents} />
            </Box>
        </Layout>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    const post = getQuizBySlug(params.slug, ['content']);

    const mdxSource = await serialize(post.content, {
        mdxOptions: {
            remarkPlugins: [remarkMdxCodeMeta]
        }
    });
    return {
        props: {
            slug: params.slug,
            content: mdxSource
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
};