import { Alert, Box, chakra, Center, Code as ChakraCode } from '@chakra-ui/react';
import { Code, preToCodeBlock } from './code';
// import { ChakraNextImage } from 'components/chakra-next-image';
import NextImage from 'next/image';
import { ReactElement } from 'react';
import { QuizHighlight } from './quiz-highlight';
import { TWHeadingLink, TWMDXLink } from '@/components/tailwind/link';

// Components provided by Chakra UI https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/mdx-components.tsx

const InlineCode = (props: object): ReactElement => (
    // .inlinecode is styled in mdx-styles file
    <ChakraCode className="inlinecode" {...props} />
);

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />;

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
    strong: (props): ReactElement => <Box as="strong" fontWeight="extrabold" {...props} />,
    pre: (preProps) => {
        // Refer Kent C Dodds Implementation below
        const props = preToCodeBlock(preProps);
        if (props) {
            return (
                <Box mt={5}>
                    <Code {...props} />
                </Box>
            );
        } else {
            return <Pre {...preProps} />;
        }
    },
    code: InlineCode,
    blockquote: (props): ReactElement => (
        <Alert
            mt="4"
            role="none"
            status="warning"
            variant="left-accent"
            as="blockquote"
            rounded="4px"
            my="1.5rem"
            sx={{
                // > p needed to override common p tag styles under mdx-styles
                '> p': {
                    mt: 0
                }
            }}
            {...props}
        />
    ),
    a: TWMDXLink,
    p: (props): ReactElement => <chakra.p {...props} />,
    ul: (props): ReactElement => <chakra.ul {...props} />,
    ol: (props): ReactElement => <chakra.ol {...props} />,
    li: (props): ReactElement => <chakra.li {...props} />,
    em: (props): ReactElement => <chakra.p as="em" {...props} />,
    Image: (props): ReactElement => (
        <Center mt="5">
            <NextImage {...props} />
        </Center>
    ),
    QuizHighlight: QuizHighlight
};

export { MDXComponents };
