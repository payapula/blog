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
            remarkPlugins: [remarkMdxCodeMeta]
        }
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
