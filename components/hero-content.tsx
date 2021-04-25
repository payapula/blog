import { Button, Flex, Box, Text, Stack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { AuthorAvatar } from 'components/author-avatar';

function HeroContent() {
    return (
        // Till 960px -> 70vh is maintained,  after that 60vh is maintained
        <Flex
            height={{ xs: '70vh', lg: '60vh' }}
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-evenly">
            <Box
                display={{ lg: 'none' }}
                // css={css`
                //     @media (orientation: landscape) {
                //         width: 100px !important;
                //         height: 100px !important;
                //     }
                // `}
            >
                <AuthorAvatar size={180} />
            </Box>
            <Stack
                align={['center', null, null, null, 'start']}
                height="260"
                justifyContent="space-between">
                <Heading
                    as="h1"
                    fontSize={['3xl', null, null, '30px', '35px']}
                    maxW={['23rem', null, null, '30rem']}
                    textAlign={['center', null, null, null, 'start']}>
                    Hi, I&apos;m Bharathi Kannan, Frontend Engineer
                </Heading>
                <Text
                    fontSize={['sm', null, 'md', 'lg']}
                    align={['center', null, null, null, 'start']}>
                    Tech enthusisast, who is interested in developing scalable and accessible web
                    applications. Proficient in developing applications from given business
                    requirements and efficient in maintaining existing software.
                </Text>
                <Button colorScheme="blue" width={180}>
                    Download Resume
                </Button>
            </Stack>
            <Box display={{ base: 'none', lg: 'block' }}>
                <AuthorAvatar size={500} />
            </Box>
        </Flex>
    );
}

export { HeroContent };
