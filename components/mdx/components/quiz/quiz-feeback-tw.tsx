import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import siteConfig from 'configs/site-configs';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/shadcn/accordion';
import { TWMDXLink } from '@/components/tailwind/link';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function QuizFeedback() {
    return (
        <Accordion type="single" collapsible className="mt-4 h-[300px] w-full max-w-3xl">
            <AccordionItem value="item-1">
                <AccordionTrigger className="w-full p-4 text-green-800 hover:no-underline dark:text-green-400">
                    <div className="flex w-full items-center justify-between gap-2">
                        <FaCircleInfo size={20} />
                        <p className="lg:text:lg text-base">
                            Report a correction or Provide feedback
                        </p>
                        {/**
                         * The up down rotate of this icon is done inside accordion.tsx
                         *
                         * via: "[&[data-state=open]_svg]:rotate-180" Class
                         */}
                        <ChevronDownIcon className="chevron h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400" />
                    </div>
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base lg:text-lg" asChild>
                    <p className="p-4 py-2">
                        If you feel something is not quite right, or if you need to provide
                        feedback, the easier way is by{' '}
                        <TWMDXLink href={siteConfig.general.twitter}>
                            messaging me directly on Twitter
                        </TWMDXLink>
                        . Otherwise, you can also{' '}
                        <TWMDXLink href={siteConfig.general.github}>
                            open an issue in the GitHub repository
                        </TWMDXLink>{' '}
                        with the details.
                        <p className="mt-2">I promise to respond as early as I can 😄</p>
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        // <Accordion
        //     allowToggle
        //     mt={8}
        //     marginLeft="auto"
        //     marginRight="auto"
        //     maxWidth="700px"
        //     width="100%"
        //     sx={{
        //         '& h2': {
        //             marginTop: 2,
        //             marginBottom: 2
        //         },
        //         '& p.info': {
        //             marginTop: 0
        //         }
        //     }}>
        //     <AccordionItem>
        //         <h2>
        //             <AccordionButton>
        //                 <InfoOutlineIcon w={8} />
        //                 <Box as="span" flex="1">
        //                     Report a correction or Provide feedback
        //                 </Box>
        //                 <AccordionIcon />
        //             </AccordionButton>
        //         </h2>
        //         <AccordionPanel pb={4} as="p" className="info">
        //             If you feel something is not quite right, or if you need to provide feedback,
        //             the easier way is by{' '}
        //             <ChakraMDXLink href={siteConfig.general.twitter}>
        //                 messaging me directly on Twitter
        //             </ChakraMDXLink>
        //             . However, you can also{' '}
        //             <ChakraMDXLink href={siteConfig.general.github}>
        //                 open an issue in the GitHub repository
        //             </ChakraMDXLink>{' '}
        //             with the details.
        //             <Text mt={2}>I promise to respond as early as I can 😄</Text>
        //         </AccordionPanel>
        //     </AccordionItem>
        // </Accordion>
    );
}
