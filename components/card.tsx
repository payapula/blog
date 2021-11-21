import {
    Flex,
    Text,
    HStack,
    useColorModeValue,
    Heading,
    chakra,
    ChakraProps
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title?: string;
    excerpt?: string;
    override?: ChakraProps;
    blogCard?: boolean;
    keywords: string;
}

const MotionFlex = motion(Flex);

function Card({ title, excerpt, override, blogCard, keywords }: CardProps): ReactElement {
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardBorder = useColorModeValue('none', '1px');
    const keywordsArray = keywords.split(',');
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
                <Text>
                    {keywordsArray.map((keyword) => {
                        return (
                            <chakra.span
                                key={keyword}
                                // eslint-disable-next-line
                                background={useColorModeValue(
                                    'hsl(324deg 86% 80% / 40%)',
                                    'hsl(324deg 52% 35% / 35%)'
                                )}
                                ml={1}
                                // eslint-disable-next-line
                                color={useColorModeValue('black', 'white')}
                                borderRadius="4px"
                                padding="2px"
                                mr={1}
                                fontSize="md">
                                #{keyword}
                            </chakra.span>
                        );
                    })}
                </Text>
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
    keywords: string;
}

function BlogCard({ title, excerpt, keywords }: BlogCardProps): ReactElement {
    return (
        <Card
            override={{
                width: '100%',
                border: '1px solid teal',
                height: { xs: 'auto', lg: '300px' }
            }}
            title={title}
            excerpt={excerpt}
            keywords={keywords}
            blogCard
        />
    );
}

export { Card, BlogCard };
