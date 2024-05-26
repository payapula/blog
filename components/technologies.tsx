// Inspired by https://github.com/guarmo/portfolio/blob/master/components/About.js
import { Flex, Text, useColorModeValue, Icon, SimpleGrid, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { DiReact, DiJsBadge, DiNodejs, DiHtml5, DiCss3, DiAndroid } from 'react-icons/di';
import {
    SiNextdotjs,
    SiTypescript,
    SiCsharp,
    SiFirebase,
    SiAwsamplify,
    SiRemix
} from 'react-icons/si';

type IconMeta = {
    color: string;
    text: string;
    icon: IconType;
};

type IconSet = {
    [key in string]: IconMeta;
};

const iconSet: IconSet = {
    ts: { color: '#3178c6', text: 'TypeScript', icon: SiTypescript },
    react: { color: '#61dafb', text: 'React', icon: DiReact },
    next: { color: '', text: 'NextJS', icon: SiNextdotjs },
    remix: { color: '', text: 'Remix', icon: SiRemix },
    node: { color: '#026e00', text: 'NodeJS', icon: DiNodejs },
    js: { color: '#fcdc00', text: 'Javascript', icon: DiJsBadge },
    firebase: { color: '#FFCA28', text: 'Firebase', icon: SiFirebase },
    amplify: { color: '#FF9900', text: 'AWS Amplify', icon: SiAwsamplify },
    html: { color: '#e54c21', text: 'HTML', icon: DiHtml5 },
    css: { color: '#1672b6', text: 'CSS', icon: DiCss3 },
    csharp: { color: '#189f20', text: 'C Sharp', icon: SiCsharp },
    android: { color: '#a5c736', text: 'Android', icon: DiAndroid }
};

function Technologies(): ReactElement {
    const technologiesBgColor = useColorModeValue('#EDF7FA', 'gray.800');

    return (
        <Flex
            direction="column"
            align="center"
            mt={10}
            width="100vw"
            background={technologiesBgColor}
            position="relative"
            left="calc(-50vw + 50%)"
            py={10}>
            <Heading>Technologies</Heading>
            <Text fontSize={['sm', null, 'md', 'lg']} mt="7" textAlign="center">
                These are the toolstacks I have hands-on experience on
            </Text>
            <SimpleGrid
                columns={{ xs: 3, lg: 4 }}
                spacing={{ xs: '35px', lg: '50px' }}
                width="70%"
                mt="50px">
                {Object.entries(iconSet).map(([iconKey, iconValue]) => (
                    <RenderIcon key={iconKey} iconData={iconValue} />
                ))}
            </SimpleGrid>
        </Flex>
    );
}

interface RenderIconProps {
    iconData: IconMeta;
}

// Refer to Sizes here  https://github.com/chakra-ui/chakra-ui/blob/c2f0d1bb2a07fe6af5e53a1f216d80c9a7d6df72/packages/components/theme/src/foundations/sizes.ts
const responsiveSize = { xs: 12, md: 16, lg: 20 };

function RenderIcon({ iconData }: RenderIconProps): ReactElement {
    const { color, icon, text } = iconData;
    return (
        <Flex direction="column" align="center">
            <Icon
                as={icon}
                width={responsiveSize}
                height={responsiveSize}
                _hover={{ transform: 'scale(1.2)', color }}
                transition="all .2s ease-in-out"
                color={useColorModeValue(color, 'currentColor')}
                aria-label={`Logo of ${text}`}
            />
            <Text
                fontWeight="bold"
                fontSize={{ xs: 'md', md: 'lg' }}
                mt="2"
                textAlign="center"
                aria-hidden="true">
                {text}
            </Text>
        </Flex>
    );
}

export { Technologies };
