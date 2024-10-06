import React, { ReactElement } from 'react';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';
import siteConfig from 'configs/site-configs';
import { TWLink } from '../tailwind/link';

interface PostFooterProps {
    slug: string;
    dates: {
        createdDate: string;
        modifiedDate: string;
    };
}

function TimeStamp({ date, text }: { text: string; date: string }): ReactElement {
    return (
        <p className="text-center text-sm md:text-base">
            {text}
            <span className="ml-2 font-bold">{date}</span>
        </p>
    );
}

function PostFooter({ slug, dates: { createdDate, modifiedDate } }: PostFooterProps): ReactElement {
    return (
        <div className="mt-5 flex flex-col">
            <div className="flex justify-between">
                <TimeStamp text="Published:" date={createdDate} />
                <TimeStamp text="Updated:" date={modifiedDate} />
            </div>
            <div className="mt-5 flex h-[25px] justify-between">
                <div className="text-center">
                    <TWLink
                        href={`https://twitter.com/search?q=${siteConfig.general.siteUrl}/blog/${slug}`}>
                        Let&apos;s Discuss On Twitter
                    </TWLink>
                    <FaLocationArrow
                        size={20}
                        className="ml-2 inline-block h-3 w-3 cursor-pointer md:h-5 md:w-5"
                        title="Twitter"
                        color="#1ea1f2"
                    />
                </div>
                <div className="ml-auto text-center">
                    <FaGithub
                        size={20}
                        className="mr-3 inline-block h-3 w-3 cursor-pointer md:h-6 md:w-6"
                        title="GitHub"
                    />
                    <TWLink href={`${siteConfig.general.editUrl}/${slug}.mdx`}>
                        Edit this Post On GitHub
                    </TWLink>
                </div>
            </div>
        </div>
    );
}

export { PostFooter };
