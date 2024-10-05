import { getAllPosts } from 'lib/api';
// import { BlogCard } from 'components/card';
import { BlogCard } from 'components/tailwind/card';
import { Layout } from 'components/layout';
import { GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import Post from 'types/post';
import NextLink from 'next/link';
import Head from 'next/head';
// import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { Input } from '@/components/shadcn/input';
import { Button } from '@/components/tailwind/button';
import VisuallyHidden from '@/components/tailwind/visuallyHidden';
import { IoCloseSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { PageHeading } from '@/components/tailwind/page-heading';

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
    const [searchText, setSearchText] = React.useState('');
    const [filteredPosts, setFilteredPosts] = React.useState(allPosts);

    let postsDisplay = allPosts;

    if (searchText) {
        if (filteredPosts.length !== 0) {
            postsDisplay = filteredPosts;
        }
    }

    return (
        <Layout headerSticky>
            <Head>
                <title>Blogs | Bharathi Kannan</title>
            </Head>
            <PageHeading width="w-[100px]">Posts</PageHeading>
            <SearchPosts
                allPosts={allPosts}
                setFilteredPosts={setFilteredPosts}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            {!!searchText && filteredPosts?.length === 0 && (
                <p className="text-md mt-2 text-center sm:text-lg md:text-xl">
                    🤷🏾‍♂️ No posts available with this search. Showing all posts... 🛠
                </p>
            )}
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
                {postsDisplay.map((post) => {
                    return (
                        <NextLink
                            as={`/blog/${post.slug}`}
                            key={post.slug}
                            href="/blog/[slug]"
                            passHref>
                            <a className="hover:no-underline">
                                <BlogCard
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    keywords={post.keywords}
                                />
                            </a>
                        </NextLink>
                    );
                })}
            </div>
        </Layout>
    );
}

interface SearchPostsProps {
    allPosts: Post[];
    setFilteredPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    searchText: string;
    setSearchText: (text: string) => void;
}

function SearchPosts(props: SearchPostsProps) {
    const { allPosts, setFilteredPosts, searchText, setSearchText } = props;
    const inputRef = React.useRef<HTMLInputElement>();

    const handleChange = (event) => {
        const searchText = event.target.value;
        const searchValueInLowercase = searchText.toLowerCase();
        const filterPosts = allPosts.filter(function searchPost(post) {
            return (
                post.title.toLowerCase().includes(searchValueInLowercase) ||
                post.excerpt.toLowerCase().includes(searchValueInLowercase) ||
                post.keywords
                    .split(',')
                    .some((keyword) => keyword.toLowerCase().includes(searchValueInLowercase))
            );
        });
        setSearchText(event.target.value);
        setFilteredPosts(filterPosts);
    };

    return (
        <div className="relative mt-3 flex items-center gap-3">
            <label htmlFor="search" className="sr-only">
                Search Posts
            </label>
            <FaSearch size={24} color={'0d9488'} onClick={() => inputRef.current.focus()} />
            <Input
                id="search"
                placeholder="Search Posts"
                value={searchText}
                onChange={handleChange}
                ref={inputRef}
                className="border-teal dark:border-teal h-10 border-[1px] text-base hover:border-black dark:hover:border-[#ff822f80]"
            />
            {!!searchText && (
                <Button
                    onClick={() => {
                        setSearchText('');
                        inputRef.current.focus();
                    }}
                    className="absolute right-1 top-[3.5px] h-8 w-2 p-0">
                    <VisuallyHidden>Clear Search</VisuallyHidden>
                    <IoCloseSharp size={24} className="h-6 w-6" />
                </Button>
            )}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'slug', 'excerpt', 'keywords']);

    return {
        props: { allPosts }
    };
};
