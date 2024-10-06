import { Layout } from 'components/layout';
import NextLink from 'next/link';
import * as React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllQuizzes } from 'lib/quiz.api';
import QuizType from 'types/quiz';
import { QuizCard } from 'components/tailwind/card';
import { PageHeading } from '@/components/tailwind/page-heading';

type Props = {
    allQuizzes: QuizType[];
};

export default function QuizIndex({ allQuizzes: allQuizzes }: Props) {
    return (
        <Layout headerSticky>
            <Head>
                <title>Quiz | Bharathi Kannan</title>
            </Head>
            <PageHeading width="w-[130px]">Quizzes</PageHeading>
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
                {allQuizzes.map((quiz) => {
                    return (
                        <NextLink
                            as={`/quiz/${quiz.slug}`}
                            key={quiz.slug}
                            href="/quiz/[slug]"
                            passHref>
                            <a className="hover:no-underline">
                                <QuizCard
                                    title={quiz.title}
                                    excerpt={quiz.description}
                                    keywords={quiz.keywords}
                                />
                            </a>
                        </NextLink>
                    );
                })}
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allQuizzes = getAllQuizzes(['title', 'slug', 'description', 'keywords']);

    return {
        props: { allQuizzes }
    };
};
