import { ReactElement } from 'react';
import { Icon, Flex } from '@chakra-ui/react';
import { ChakraLink } from 'components/chakra-link';
import { FaGithub } from 'react-icons/fa';
import siteConfig from 'configs/site-configs';

function PostFooter({ slug }: { slug: string }): ReactElement {
    return (
        <Flex mt={5} justify="flex-end" h="25px">
            <Icon as={FaGithub} w="6" h="6" cursor="pointer" title="GitHub" />
            <ChakraLink ml={3} href={`${siteConfig.general.editUrl}/${slug}.mdx`}>
                Edit this Post On GitHub
            </ChakraLink>
        </Flex>
    );
}

export { PostFooter };
