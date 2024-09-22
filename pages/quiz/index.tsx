import { Layout } from 'components/layout';
import NextLink from 'next/link';
import * as React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllQuizzes } from 'lib/quiz.api';
import QuizType from 'types/quiz';
import { chakra, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// import { QuizCard } from 'components/card';
import { QuizCard } from 'components/tailwind/card';

type Props = {
    allQuizzes: QuizType[];
};

export default function QuizIndex({ allQuizzes: allQuizzes }: Props) {
    return (
        <Layout headerSticky>
            <Head>
                <title>Quiz | Bharathi Kannan</title>
            </Head>
            <Heading
                as="h1"
                width="130px"
                mx="auto"
                mt="8"
                bgClip="text"
                bgGradient={useColorModeValue(
                    'linear(to-r,  #d26472, #c73d75, #b10a82, #8b0095, #3e02ab)',
                    'linear(to-r, #c19685, #b8a178, #9eaf7b, #76bc95, #3ec4c1)'
                )}>
                Quizzes
            </Heading>
            <SimpleGrid
                columns={[1, null, null, null, 2, 3]}
                mt="10"
                spacing={10}
                // Card styles are based on this className "posts-container"
                // Refer: styles.ts file
                className="posts-container">
                {allQuizzes.map((quiz) => {
                    return (
                        <NextLink
                            as={`/quiz/${quiz.slug}`}
                            key={quiz.slug}
                            href="/quiz/[slug]"
                            passHref>
                            <chakra.a _hover={{ textDecoration: 'none' }}>
                                <QuizCard
                                    title={quiz.title}
                                    excerpt={quiz.description}
                                    keywords={quiz.keywords}
                                />
                            </chakra.a>
                        </NextLink>
                    );
                })}
            </SimpleGrid>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allQuizzes = getAllQuizzes(['title', 'slug', 'description', 'keywords']);

    return {
        props: { allQuizzes }
    };
};
