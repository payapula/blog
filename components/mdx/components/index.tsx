import { Code, preToCodeBlock } from './code';
// import { ChakraNextImage } from 'components/chakra-next-image';
import NextImage from 'next/image';
import { ReactElement } from 'react';
import { QuizHighlight } from './quiz-highlight';
import { TWHeadingLink, TWMDXLink } from '@/components/tailwind/link';

// Components provided by Chakra UI https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/mdx-components.tsx
const InlineCode = (props: object): ReactElement => {
    return (
        <code
            className="rounded-md border-2 border-neutral-300 bg-neutral-100 px-1 py-1 font-mono text-sm 
            font-medium text-rose-800 dark:border-neutral-700
            dark:bg-neutral-800 dark:text-orange-300"
            {...props}
        />
    );
};

const Pre = (props) => <div className="my-[2em] rounded-sm" {...props} />;

const MDXComponents = {
    h2: (props) => (
        <TWHeadingLink
            className="mb-2 mt-8 text-2xl font-semibold  text-green-800 lg:mt-12 lg:text-4xl dark:text-green-400"
            {...props}
        />
    ),
    h3: (props) => (
        <TWHeadingLink
            className="mt-12 text-lg font-semibold  text-green-800 lg:text-xl dark:text-green-400"
            as="h3"
            {...props}
        />
    ),
    h4: (props) => (
        <TWHeadingLink
            as="h4"
            className="mt-12 font-semibold  text-green-800 md:text-lg dark:text-green-400"
            {...props}
        />
    ),
    strong: (props): ReactElement => (
        <strong className="font-extrabold text-red-700 dark:text-amber-500" {...props} />
    ),
    pre: (preProps) => {
        // Refer Kent C Dodds Implementation below
        const props = preToCodeBlock(preProps);
        if (props) {
            return (
                <div className="mt-5">
                    <Code {...props} />
                </div>
            );
        } else {
            return <Pre {...preProps} />;
        }
    },
    code: InlineCode,
    blockquote: (props): ReactElement => (
        <blockquote
            className="blockQuotePara relative my-6 mt-4 flex w-full items-center
            overflow-hidden rounded-sm border-s-4 border-s-orange-600 bg-amber-100 py-3 pe-4 ps-3 dark:border-s-amber-300 dark:bg-opacity-20"
            role="none"
            {...props}
        />
    ),
    a: TWMDXLink,
    p: (props): ReactElement => <p className="mt-5 lg:text-lg" {...props} />,
    ul: (props): ReactElement => <ul className="ml-5 mt-4 list-disc leading-relaxed" {...props} />,
    ol: (props): ReactElement => <ol className="ml-5 mt-4 list-disc leading-relaxed" {...props} />,
    li: (props): ReactElement => <li className="pb-1 lg:text-lg" {...props} />,
    em: (props): ReactElement => (
        <em className="mr-1 mt-1 text-purple-600 dark:text-fuchsia-400" {...props} />
    ),
    hr: (props): ReactElement => <hr className="mt-10" {...props} />,
    Image: (props): ReactElement => (
        <div className="mt-5 flex items-center justify-center">
            <NextImage {...props} />
        </div>
    ),
    QuizHighlight: QuizHighlight
};

export { MDXComponents };
