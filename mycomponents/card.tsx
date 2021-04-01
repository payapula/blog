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
import DateFormatter from './date-formatter';
import { motion } from 'framer-motion';

interface CardProps {
    title?: string;
    date?: string;
    excerpt?: string;
    override?: ChakraProps;
}

const MotionFlex = motion(Flex);

function Card({ title, date, excerpt, override }: CardProps): ReactElement {
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
            justifyContent="space-between"
            height="265px"
            padding="2"
            width={['95%', null, null, null, '45%']}
            className="card-container"
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
            <Heading fontSize={['2xl', null, null, 'xl']} fontWeight="extrabold" textAlign="start">
                {title ? title : `How to use React Context effectively`}
            </Heading>
            <HStack>
                <Text> {date ? <DateFormatter dateString={date} /> : `12 FEB 2021`}</Text>
                <Text>| Design, Pattern</Text>
            </HStack>
            <Text fontSize={['md', null, 'lg', 'xl']} noOfLines={[4, null, 5]}>
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
    date: string;
    excerpt: string;
}

function BlogCard({ title, date, excerpt }: BlogCardProps): ReactElement {
    return (
        <Card
            override={{
                width: '100%',
                border: '1px solid teal',
                height: ['280', null, '300']
            }}
            title={title}
            date={date}
            excerpt={excerpt}
        />
    );
}

export { Card, BlogCard };
