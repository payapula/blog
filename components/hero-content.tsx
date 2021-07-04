import { Link, Flex, Box, Text, Stack, useStyleConfig, useColorModeValue } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { AuthorAvatar } from 'components/author-avatar';
import { ReactElement } from 'react';

function HeroContent(): ReactElement {
    const styles = useStyleConfig('Button');
    const buttonStyles = {
        ...styles,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '180',
        height: '12',
        background: useColorModeValue('blue.500', 'blue.200'),
        color: useColorModeValue('white', 'gray.800')
    };
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
                    Tech enthusiast who is interested in developing scalable and accessible web.
                    Proficient in developing applications from given business requirements and
                    efficient in maintaining existing software.
                </Text>
                {/*//@ts-ignore: Here we are showing Link as a Button*/}
                <Link
                    {...buttonStyles}
                    _hover={{
                        background: useColorModeValue('blue.600', 'blue.300')
                    }}
                    _focus={{
                        background: useColorModeValue('blue.600', 'blue.300'),
                        outline: '2px dashed teal'
                    }}
                    href="/assets/resume/Bharathi Kannan Full Stack Resume.pdf"
                    download>
                    Download Resume
                </Link>
            </Stack>
            <Box display={{ base: 'none', lg: 'block' }}>
                <AuthorAvatar size={500} />
            </Box>
        </Flex>
    );
}

export { HeroContent };
