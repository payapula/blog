import * as React from 'react';
import { Button, useColorModeValue, ButtonProps } from '@chakra-ui/react';
import { ComponentWithChildren } from './utils';

type Props = ComponentWithChildren & ButtonProps;

export function QuizNavigationButton({ children, ...props }: Props) {
    const bg = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
    const bgHover = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');
    const fg = useColorModeValue('white', 'black');

    return (
        <Button
            backgroundColor={bg}
            color={fg}
            _hover={{
                backgroundColor: bgHover
            }}
            _focus={{
                outline: '2px dashed teal',
                boxShadow: 'none'
            }}
            {...props}>
            {children}
        </Button>
    );
}
