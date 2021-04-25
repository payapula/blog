import Cover from 'types/cover';
import { ReactElement } from 'react';
import { Text, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChakraLink } from 'components/chakra-link';
import Image from 'next/image';

interface PostCoverProps {
    cover: Cover;
}
function PostCover({ cover }: PostCoverProps): ReactElement {
    return (
        <Box mt={8}>
            <Image
                src={cover.src}
                alt={cover.alt}
                width={1400}
                height={800}
                priority
                objectFit="contain"
            />
            <Text align="center">
                Photo By
                <NextLink href={cover.author.url} passHref>
                    <ChakraLink ml={1}>{cover.author.name}</ChakraLink>
                </NextLink>
            </Text>
        </Box>
    );
}

export { PostCover };
