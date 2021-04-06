import { ReactElement } from 'react';
import { Icon, Flex } from '@chakra-ui/react';
import { ChakraLink } from 'mycomponents/chakra-link';
import { FaGithub } from 'react-icons/fa';

const EDIT_URL = 'https://github.com/payapula/blog/edit/develop/_posts/';

function PostFooter({ slug }: { slug: string }): ReactElement {
    return (
        <Flex mt={5} justify="flex-end" h="25px">
            <Icon as={FaGithub} w="6" h="6" cursor="pointer" title="GitHub" />
            <ChakraLink ml={3} href={`${EDIT_URL}/${slug}.mdx`}>
                Edit this Post On GitHub
            </ChakraLink>
        </Flex>
    );
}

export { PostFooter };
