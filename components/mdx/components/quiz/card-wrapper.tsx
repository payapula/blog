import * as React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ComponentWithChildren } from './utils';

const getShadowForCard = (color1, color2) => `1px 1px 6px 4px ${color1}, 0 1px 1px 1px ${color2}`;

export function CardWrapper({ children }: ComponentWithChildren) {
    const lightShadow = getShadowForCard('rgba(0, 0, 0, 0.12)', 'rgba(0, 0, 0, 0.24)');
    const darkShadow = getShadowForCard('rgba(255, 130, 47, 0.25)', 'rgba(95, 83, 76, 0.22)');
    const colorBoxShadow = useColorModeValue(lightShadow, darkShadow);

    const borderColor = useColorModeValue('1px solid black', '1px solid teal');
    return (
        <Flex
            direction={'column'}
            justifyContent="flex-start"
            padding={8}
            borderRadius="4"
            border={borderColor}
            boxShadow={colorBoxShadow}>
            {children}
        </Flex>
    );
}
