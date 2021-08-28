/* eslint-disable */
import {
    Alert,
    Box,
    Heading,
    chakra,
    Center,
    Code as ChakraCode,
    useColorModeValue
} from '@chakra-ui/react';
import { Code, preToCodeBlock } from './code';
import { ChakraLink } from 'components/chakra-link';
import { ChakraNextImage } from 'components/chakra-next-image';
import { ReactElement } from 'react';

// Components provided by Chakra UI https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/mdx-components.tsx

const InlineCode = (props: unknown): ReactElement => (
    <ChakraCode
        apply="general.code"
        color={useColorModeValue('code.color.light', 'code.color.dark')}
        backgroundColor={useColorModeValue('code.bg.light', 'code.bg.dark')}
        {...props}
    />
);

const Table = (props: unknown): ReactElement => (
    <chakra.div overflowX="auto">
        <chakra.table textAlign="left" mt="32px" width="full" {...props} />
    </chakra.div>
);

const THead = (props: unknown): ReactElement => (
    <chakra.th
        bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
        fontWeight="semibold"
        p={2}
        fontSize="sm"
        {...props}
    />
);

const TData = (props: unknown): ReactElement => (
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
    h1: (props): ReactElement => <Heading as="h2" {...props} />,
    h2: (props): ReactElement => <Heading {...props} />,
    h3: (props): ReactElement => <Heading as="h3" {...props} />,
    h4: (props): ReactElement => <Heading as="h4" {...props} />,
    strong: (props): ReactElement => <Box as="strong" fontWeight="extrabold" {...props} />,
    inlineCode: InlineCode,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    a: ChakraLink,
    p: (props): ReactElement => <chakra.p {...props} />,
    ul: (props): ReactElement => <chakra.ul {...props} />,
    ol: (props): ReactElement => <chakra.ol {...props} />,
    li: (props): ReactElement => <chakra.li {...props} />,
    em: (props): ReactElement => <chakra.p as="em" {...props} />,
    Image: (props): ReactElement => (
        <Center mt="5">
            <ChakraNextImage {...props} />
        </Center>
    )
};

export { MDXComponents };
