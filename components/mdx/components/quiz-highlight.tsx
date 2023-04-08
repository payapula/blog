import { Box, Text, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { SiSpeedtest } from 'react-icons/si';

export function QuizHighlight({ children }: { children: React.ReactNode }) {
    const bg = useColorModeValue('teal.100', 'teal.900');

    return (
        <Flex flexDir="column" alignItems="center" backgroundColor={bg} padding={4}>
            <Icon as={SiSpeedtest} boxSize={8} />
            <Text textAlign="center">Test your understanding by taking the Quiz</Text>
            <Box>{children}</Box>
        </Flex>
    );
}
