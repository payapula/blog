import { Alert, Box, Heading, chakra, useColorModeValue } from '@chakra-ui/react';

// Components provided by Chakra UI https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/mdx-components.tsx

const Test = () => <div>Hello from JSX!</div>;

const InlineCode = (props: any) => (
    <chakra.code
      apply="mdx.code"
      color={useColorModeValue("purple.500", "purple.200")}
      {...props}
    />
);

const Table = (props) => (
    <chakra.div overflowX="auto">
      <chakra.table textAlign="left" mt="32px" width="full" {...props} />
    </chakra.div>
  )
  
  const THead = (props) => (
    <chakra.th
      bg={useColorModeValue("gray.50", "whiteAlpha.100")}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  )
  
  const TData = (props) => (
    <chakra.td
      p={2}
      borderTopWidth="1px"
      borderColor="inherit"
      fontSize="sm"
      whiteSpace="normal"
      {...props}
    />
  )

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />

const MDXComponents = {
    Test,
    h1: (props) =>  <Heading apply="mdx.h1" {...props} />,
    h2: (props) => <Heading apply="mdx.h2" {...props} />,
    h3: (props) => <Heading as="h3" apply="mdx.h3" {...props} />,
    h4: (props) => <Heading as="h4" apply="mdx.h4" {...props} />,
    strong: (props) => <Box as="strong" fontWeight="extrabold" {...props} />,
    inlineCode: InlineCode,
    pre: Pre,
    table: Table,
    th: THead,
    td: TData,
    blockquote: (props) => (
        <Alert
          mt="4"
          role="none"
          status="warning"
          variant="left-accent"
          as="blockquote"
          rounded="4px"
          my="1.5rem"
          {...props}
        />
      ),
    a: (props) => <chakra.a apply="mdx.a" {...props} />,
    p: (props) => <chakra.p apply="mdx.p" {...props} />,
    ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
    ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
    li: (props) => <chakra.li pb="4px" {...props} />,
};

export {MDXComponents}