import {
    chakra,
    Heading,
    SimpleGrid,
    useColorModeValue,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    InputLeftElement,
    Text
} from '@chakra-ui/react';
import { getAllPosts } from 'lib/api';
import { BlogCard } from 'components/card';
import { Layout } from 'components/layout';
import { GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import Post from 'types/post';
import NextLink from 'next/link';
import Head from 'next/head';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';

type Props = {
    allPosts: Post[];
};

/*
  {
    title: 'Preview Mode for Static Generation',
    slug: 'preview',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  } 
 */

export default function Index({ allPosts }: Props): ReactElement {
    const [filteredPosts, setFilteredPosts] = React.useState(allPosts);

    const postsDisplay = filteredPosts.length !== 0 ? filteredPosts : allPosts;
    return (
        <Layout headerSticky>
            <Head>
                <title>Blogs | Bharathi Kannan</title>
            </Head>
            <Heading
                as="h1"
                width="100px"
                mx="auto"
                mt="8"
                bgClip="text"
                bgGradient={useColorModeValue(
                    'linear(to-r,  #d26472, #c73d75, #b10a82, #8b0095, #3e02ab)',
                    'linear(to-r, #c19685, #b8a178, #9eaf7b, #76bc95, #3ec4c1)'
                )}>
                Posts
            </Heading>
            <SearchPosts allPosts={allPosts} setFilteredPosts={setFilteredPosts} />
            {filteredPosts?.length === 0 && (
                // eslint-disable-next-line
                <Text fontSize={['md', null, 'lg', 'xl']} mt={2} textAlign="center">
                    🤷🏾‍♂️ No posts available with this search. 🛠
                </Text>
            )}
            <SimpleGrid
                columns={[1, null, null, null, 2, 3]}
                mt="10"
                spacing={10}
                // Card styles are based on this className "posts-container"
                // Refer: styles.ts file
                className="posts-container">
                {postsDisplay.map((post) => {
                    return (
                        <NextLink
                            as={`/blog/${post.slug}`}
                            key={post.slug}
                            href="/blog/[slug]"
                            passHref>
                            <chakra.a _hover={{ textDecoration: 'none' }}>
                                <BlogCard
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    keywords={post.keywords}
                                />
                            </chakra.a>
                        </NextLink>
                    );
                })}
            </SimpleGrid>
        </Layout>
    );
}

interface SearchPostsProps {
    allPosts: Post[];
    setFilteredPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

function SearchPosts(props: SearchPostsProps) {
    const [value, setValue] = React.useState('');
    const { allPosts, setFilteredPosts } = props;

    const handleChange = (event) => setValue(event.target.value);

    React.useEffect(() => {
        const searchValueInLowercase = value.toLowerCase();
        const filterPosts = allPosts.filter(function searchPost(post) {
            return (
                post.title.toLowerCase().includes(searchValueInLowercase) ||
                post.excerpt.toLowerCase().includes(searchValueInLowercase) ||
                post.keywords
                    .split(',')
                    .some((keyword) => keyword.toLowerCase().includes(searchValueInLowercase))
            );
        });
        setFilteredPosts(filterPosts);
    }, [allPosts, setFilteredPosts, value]);

    return (
        <InputGroup mt={3}>
            <InputLeftElement>
                <Search2Icon w={5} h={5} color="gray.300" />
            </InputLeftElement>
            <Input
                placeholder="Search Posts"
                value={value}
                onChange={handleChange}
                borderColor="teal"
                border="1px"
                _hover={{
                    borderColor: 'rgb(255 130 47 / 50%)'
                }}
            />
            {!!value && (
                <InputRightElement>
                    <IconButton
                        aria-label="Clear Search"
                        icon={<CloseIcon />}
                        w={8}
                        h={8}
                        mr={2}
                        onClick={() => setValue('')}
                    />
                </InputRightElement>
            )}
        </InputGroup>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'slug', 'excerpt', 'keywords']);

    return {
        props: { allPosts }
    };
};
