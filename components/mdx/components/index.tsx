import { Alert, Box, Heading, chakra, Center, Code as ChakraCode } from '@chakra-ui/react';
import { Code, preToCodeBlock } from './code';
import { ChakraHeadingLink, ChakraMDXLink } from 'components/chakra-link';
// import { ChakraNextImage } from 'components/chakra-next-image';
import NextImage from 'next/image';
import { ReactElement } from 'react';
import { QuizHighlight } from './quiz-highlight';

// Components provided by Chakra UI https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/mdx-components.tsx

const InlineCode = (props: object): ReactElement => (
    // .inlinecode is styled in mdx-styles file
    <ChakraCode className="inlinecode" {...props} />
);

const Table = (props: object): ReactElement => (
    <chakra.div overflowX="auto">
        <chakra.table textAlign="left" mt="32px" width="full" {...props} />
    </chakra.div>
);

const THead = (props: object): ReactElement => <chakra.th {...props} />;

const TData = (props: object): ReactElement => (
    <chakra.td
        p={2}
        borderTopWidth="1px"
        borderColor="inherit"
        fontSize="sm"
        whiteSpace="normal"
        {...props}
    />
);

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />;

const MDXComponents = {
    h1: (props): ReactElement => <Heading {...props} />,
    h2: (props) => <ChakraHeadingLink {...props} />,
    h3: (props) => <ChakraHeadingLink as="h3" {...props} />,
    h4: (props) => <ChakraHeadingLink as="h4" {...props} />,
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
    table: Table,
    th: THead,
    td: TData,
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
    a: ChakraMDXLink,
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
