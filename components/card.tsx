/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {
    Flex,
    Text,
    HStack,
    useColorModeValue,
    useColorMode,
    Heading,
    ChakraProps
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title?: string;
    excerpt?: string;
    override?: ChakraProps;
    blogCard?: boolean;
}

const MotionFlex = motion(Flex);

function Card({ title, excerpt, override, blogCard }: CardProps): ReactElement {
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardBorder = useColorModeValue('none', '1px');
    const { colorMode } = useColorMode();

    const hoverShadow =
        colorMode === 'light'
            ? 'box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);'
            : 'box-shadow: 0 14px 28px rgba(255, 130, 47, 0.25), 0 10px 10px rgba(95, 83, 76, 0.22);';
    return (
        <MotionFlex
            direction="column"
            justifyContent="flex-start"
            height="265px"
            padding="2"
            width={'95%'}
            m="0 auto"
            as="article"
            background={cardBg}
            borderRadius="4"
            border={cardBorder}
            cursor="pointer"
            // https://codepen.io/sdthornton/pen/wBZdXq
            css={css`
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                &:hover {
                    ${hoverShadow}
                }
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            {...override}>
            <Heading
                fontSize={['2xl']}
                fontWeight="extrabold"
                textAlign="start"
                bgClip="text"
                bgGradient={useColorModeValue(
                    'linear(to-r,  #d26472, #c73d75, #b10a82, #8b0095, #3e02ab)',
                    'linear(to-r, #c19685, #b8a178, #9eaf7b, #76bc95, #3ec4c1)'
                )}>
                {title ? title : `How to use React Context effectively`}
            </Heading>
            <HStack mt={5}>
                <Text>#React #Javascript</Text>
            </HStack>
            <Text mt={7} fontSize={['md', null, 'lg', 'xl']} noOfLines={blogCard ? 5 : 4}>
                {excerpt
                    ? excerpt
                    : `Nam vel lacus id ligula convallis interdum. Fusce rhoncus orci a magna tempus
                maximus. Pellentesque eget dictum leo, in elementum orci. Maecenas sit amet tempor
                magna. Cras eu arcu sagittis, accumsan metus sit amet.`}
            </Text>
        </MotionFlex>
    );
}

interface BlogCardProps {
    title: string;
    excerpt: string;
}

function BlogCard({ title, excerpt }: BlogCardProps): ReactElement {
    return (
        <Card
            override={{
                width: '100%',
                border: '1px solid teal',
                height: { xs: 'auto', lg: '300px' }
            }}
            title={title}
            excerpt={excerpt}
            blogCard
        />
    );
}

export { Card, BlogCard };
