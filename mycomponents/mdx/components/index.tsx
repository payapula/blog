import { Text, Box, Heading } from '@chakra-ui/react';


const Test = () => <div>Hello from JSX!</div>;

const MDXComponents = {
    Test,
    h2: (props) => <Heading as="h2" {...props} />
};

export {MDXComponents}