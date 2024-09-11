import { Button, Icon, VisuallyHidden } from '@chakra-ui/react';
import { Heading } from './heading';
import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

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
        text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler'
    },
    {
        text: 'Everybody should learn to program a computer, because it teaches you how to think.',
        author: 'Steve Jobs'
    },
    {
        text: 'Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.',
        author: 'Stephen Hawking'
    },
    {
        text: 'Codes are a puzzle. A game, just like any other game.',
        author: 'Alan Turing'
    }
];

export const Quotes = (): JSX.Element => {
    const [quoteNo, setQuoteNo] = React.useState(1);

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
        <div className="mt-10 flex min-h-[300px] flex-col items-center md:min-h-[320px]">
            <div className="flex basis-[60px] items-center text-center">
                <Button
                    onClick={() => toggleQuotes('previous')}
                    mr={2}
                    _focus={{
                        outline: '2px dashed teal'
                    }}>
                    <VisuallyHidden>Previous Quote</VisuallyHidden>
                    <Icon as={FaArrowAltCircleLeft} width={5} height={5} />
                </Button>
                <Heading>Favourite Quotes</Heading>
                <Button
                    onClick={() => toggleQuotes('next')}
                    ml={2}
                    _focus={{
                        outline: '2px dashed teal'
                    }}>
                    <VisuallyHidden>Next Quote</VisuallyHidden>
                    <Icon as={FaArrowAltCircleRight} width={5} height={5} />{' '}
                </Button>
            </div>
            <figure className="m-auto flex flex-col p-2 sm:p-3 md:p-4">
                <blockquote
                    className="text-xl  italic before:font-serif before:text-[1.7rem]
                    before:font-bold
                        before:content-[open-quote]
                        after:ml-[3px]
                        after:font-serif
                        after:text-[1.7rem]
                        after:font-bold
                        after:content-[close-quote]
                        sm:text-2xl
                        md:text-3xl
                        md:leading-normal
                        before:md:text-[2rem]
                        after:md:text-[2rem]
                        before:lg:text-[3rem]
                        after:lg:text-[3rem]
                ">
                    {quoteData[quoteNo].text}
                </blockquote>
                <figcaption className="self-end text-xl font-bold md:text-2xl">
                    - {quoteData[quoteNo].author}
                </figcaption>
            </figure>
        </div>
    );
};
