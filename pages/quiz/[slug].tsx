import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import { getQuizBySlug } from 'lib/quiz.api';
import { Layout } from 'components/layout';
import QuizType from 'types/quiz';
import { QuizBody } from 'components/quiz/quiz-body';
import QuizHeader from 'components/quiz/quiz-header';
import { NextSeo } from 'next-seo';
import { getBasePath } from 'utils/utils';

interface QuizProps {
    quiz: QuizType;
}

export default function Quiz({ quiz }: QuizProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const { content, title, description, slug } = quiz;

    return (
        <Layout>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    title: title,
                    description: description,
                    type: 'website',
                    url: getBasePath(`/quiz/${slug}`)
                }}
            />
            <QuizHeader title={title} />
            <QuizBody content={content} />
        </Layout>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    const post = getQuizBySlug(params.slug, ['content', 'title', 'keywords']);

    const mdxSource = await serialize(post.content, {
        mdxOptions: {
            // remark-mdx-code-meta pins unified@10 types while next-mdx-remote v6 uses
            // unified@11, so cast to bypass the type-only version skew (runtime is fine).
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            remarkPlugins: [remarkMdxCodeMeta as any]
        },
        // next-mdx-remote v5+ strips all JSX expression attributes (e.g. width={600})
        // when blockJS is on. Our posts are author-owned/trusted, so allow expressions
        // while keeping blockDangerousJS (default true) to strip dangerous JS calls.
        blockJS: false
    });

    return {
        props: {
            quiz: {
                slug: params.slug,
                title: post.title,
                content: mdxSource
            }
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
};
