import { ReactElement } from 'react';

interface CardProps {
    title?: string;
    excerpt?: string;
    blogCard?: boolean;
    keywords: string;
    border?: string;
    width?: string;
    headingAs?: 'h2' | 'h3';
}

function Card({
    title,
    excerpt,
    blogCard,
    width,
    keywords,
    border,
    headingAs = 'h3'
}: CardProps): ReactElement {
    const keywordsArray = keywords.split(',');
    const borderClass = border ?? '';
    const widthClass = width ?? '';
    const HeadingComponent = headingAs;
    return (
        <article
            /* prettier-ignore */
            className={`flex flex-col justify-start h-[265px] p-2 w-[95%]
             mt-0 mx-auto 
             rounded-2xl cursor-pointer 
             dark:border 
             bg-white 
             dark:border-gray-200 
             shadow-md 
             dark:bg-gray-800 
             ${borderClass}
             ${widthClass}
             `}>
            <HeadingComponent className="title-gradient-light dark:title-gradient-dark text-start text-2xl font-extrabold">
                {title ? title : `How to use React Context effectively`}
            </HeadingComponent>
            <div className="mt-5 flex items-center gap-1">
                <p>
                    {keywordsArray.map((keyword) => {
                        return (
                            <span
                                key={keyword}
                                className="tag-light dark:tag-dark ml-1 mr-1 rounded p-1 font-medium">
                                #{keyword}
                            </span>
                        );
                    })}
                </p>
            </div>
            <p
                className={`mt-7 text-base sm:text-lg md:text-xl ${
                    blogCard ? 'line-clamp-5' : 'line-clamp-4'
                }`}>
                {excerpt
                    ? excerpt
                    : `Nam vel lacus id ligula convallis interdum. Fusce rhoncus orci a magna tempus
                maximus. Pellentesque eget dictum leo, in elementum orci. Maecenas sit amet tempor
                magna. Cras eu arcu sagittis, accumsan metus sit amet.`}
            </p>
        </article>
    );
}

interface BlogCardProps {
    title: string;
    excerpt: string;
    keywords: string;
}

function BlogCard({ title, excerpt, keywords }: BlogCardProps): ReactElement {
    return (
        <Card
            // override={{
            //     width: '100%',
            //     border: '1px solid teal',
            //     height: { xs: 'auto', lg: '300px' }
            // }}
            title={title}
            excerpt={excerpt}
            keywords={keywords}
            border="border-teal"
            width="w-full"
            headingAs="h2"
            blogCard
        />
    );
}

function QuizCard({ title, excerpt, keywords }: BlogCardProps): ReactElement {
    return (
        <Card
            // override={{
            //     width: '100%',
            //     border: '1px solid teal',
            //     height: { xs: 'auto', lg: '300px' },
            //     as: 'div'
            // }}
            title={title}
            excerpt={excerpt}
            keywords={keywords}
            width="w-full"
            border="border-teal"
            headingAs="h2"
        />
    );
}

// export { Card, BlogCard, QuizCard };
export { Card, BlogCard, QuizCard };
