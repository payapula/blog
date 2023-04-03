import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { ChakraMDXLink } from 'components/chakra-link';
import siteConfig from 'configs/site-configs';

export function QuizFeedback() {
    return (
        <Accordion
            allowToggle
            mt={8}
            alignSelf="stretch"
            sx={{
                '& h2': {
                    marginTop: 2,
                    marginBottom: 2
                },
                '& p.info': {
                    marginTop: 0
                }
            }}>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <InfoOutlineIcon w={8} />
                        <Box as="span" flex="1">
                            Report a correction or Provide feedback
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} as="p" className="info">
                    If you feel something is not quite right, or if you need to provide feedback,
                    the easier way is by{' '}
                    <ChakraMDXLink href={siteConfig.general.twitter}>
                        messaging me directly on Twitter
                    </ChakraMDXLink>
                    . However, you can also{' '}
                    <ChakraMDXLink href={siteConfig.general.github}>
                        open an issue in the GitHub repository
                    </ChakraMDXLink>{' '}
                    with the details.
                    <Text mt={2}>I promise to respond as early as I can 😄</Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
