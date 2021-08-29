import { Heading } from '@chakra-ui/layout';
import { Box, Button, Flex, Icon, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const quoteStyles = {
    fontSize: {
        base: '1.7rem',
        md: '2rem',
        lg: '3rem'
    },
    fontFamily: 'serif',
    fontWeight: 'bold'
};

type Quotes = {
    text: string;
    author: string;
};

type QuoteData = Quotes[];

const quoteData: QuoteData = [
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    {
        text: 'It is better to write and run incomplete tests than not to run complete tests',
        author: 'Martin Fowler'
    },
    {
        text: "It's not magic. It's Talent and Sweat.",
        author: 'Bertram Gilfoyle'
    },
    {
        text:
            'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler'
    },
    {
        text: 'Everybody should learn to program a computer, because it teaches you how to think.',
        author: 'Steve Jobs'
    },
    {
        text:
            'Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.',
        author: 'Stephen Hawking'
    },
    {
        text: 'Codes are a puzzle. A game, just like any other game.',
        author: 'Alan Turing'
    }
];

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * Excellent explanation - https://stackoverflow.com/a/1527820
 * @param min
 * @param max
 * @returns random number
 */
function getRandomInt(min = 0, max = quoteData.length - 1): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Quotes = (): JSX.Element => {
    const [quoteNo, setQuoteNo] = React.useState(getRandomInt());

    const toggleQuotes = (request) => {
        let nextQuote;
        if (request === 'previous') {
            nextQuote = quoteNo === 0 ? quoteData.length - 1 : quoteNo - 1;
        } else {
            nextQuote = quoteNo === quoteData.length - 1 ? 0 : quoteNo + 1;
        }
        setQuoteNo(nextQuote);
    };

    return (
        <Flex
            direction="column"
            alignItems="center"
            minH={{
                base: '300px',
                md: '320px'
            }}
            mt={10}>
            <Heading display="flex" flexBasis="60px" alignItems="center" textAlign="center">
                <Button
                    onClick={() => toggleQuotes('previous')}
                    mr={2}
                    _focus={{
                        outline: '2px dashed teal'
                    }}>
                    <VisuallyHidden>Previous Quote</VisuallyHidden>
                    <Icon as={FaArrowAltCircleLeft} width={5} height={5} />
                </Button>
                Favourite Quotes
                <Button
                    onClick={() => toggleQuotes('next')}
                    ml={2}
                    _focus={{
                        outline: '2px dashed teal'
                    }}>
                    <VisuallyHidden>Next Quote</VisuallyHidden>
                    <Icon as={FaArrowAltCircleRight} width={5} height={5} />{' '}
                </Button>
            </Heading>
            <Flex
                as="figure"
                direction="column"
                margin="auto"
                padding={{
                    base: 2,
                    sm: 3,
                    md: 4
                }}>
                <Box
                    as="blockquote"
                    fontSize={{
                        base: 'xl',
                        sm: '2xl',
                        md: '3xl'
                    }}
                    fontStyle="italic"
                    _before={{
                        content: 'open-quote',
                        ...quoteStyles
                    }}
                    _after={{
                        content: 'close-quote',
                        ml: '3px',
                        ...quoteStyles
                    }}>
                    {quoteData[quoteNo].text}
                </Box>
                <Box
                    as="figcaption"
                    alignSelf="flex-end"
                    fontWeight={700}
                    fontSize={{ base: 'xl', md: '2xl' }}>
                    - {quoteData[quoteNo].author}
                </Box>
            </Flex>
        </Flex>
    );
};
