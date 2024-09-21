import { Card } from 'components/card';
import NextLink from 'next/link';
// import { ChakraLink } from 'components/chakra-link';
import { TWLink } from 'components/tailwind/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Post from 'types/post';

interface RecentPostsProps {
    recentPosts: Post[];
}

function RecentPosts({ recentPosts }: RecentPostsProps): JSX.Element {
    return (
        <div className="relative left-[calc(-50vw+50%)] w-[100vw] bg-sky-50 dark:bg-gray-chakra">
            <div className="mx-auto mt-3 h-[700px] px-4 sm:max-w-[95%] md:max-w-[80%] lg:mt-1 lg:h-[400px]">
                <div className="flex h-[52px] justify-center px-7 pt-5 lg:justify-between">
                    <h2 className="text-left text-xl">Recent Posts</h2>
                    <NextLink href="/blog" passHref>
                        <TWLink display="hidden lg:flex" flex="items-center" textSize="text-xl">
                            View All
                            <FaLongArrowAltRight className="ml-2" />
                        </TWLink>
                    </NextLink>
                </div>
                <div className="posts-container flex h-[600px] flex-col items-center justify-around lg:h-[350px] lg:flex-row">
                    {recentPosts.map((post) => {
                        return (
                            <NextLink
                                as={`/blog/${post.slug}`}
                                key={post.slug}
                                href="/blog/[slug]"
                                passHref>
                                <a className="w-full hover:no-underline xl:w-[50%]">
                                    <Card
                                        title={post.title}
                                        excerpt={post.excerpt}
                                        keywords={post.keywords}
                                    />
                                </a>
                            </NextLink>
                        );
                    })}
                </div>
                <div className="flex justify-center">
                    <NextLink href="/blog" passHref>
                        <TWLink textSize="text-xl" display="block lg:hidden">
                            <div className="flex items-center justify-center">
                                <p>View All</p>
                                <FaLongArrowAltRight className="ml-2" />
                            </div>
                        </TWLink>
                    </NextLink>
                </div>
            </div>
        </div>
    );
}

export { RecentPosts };
