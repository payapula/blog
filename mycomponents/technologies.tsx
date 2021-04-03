// Inspired by https://github.com/guarmo/portfolio/blob/master/components/About.jso
import { Flex, Text, useColorModeValue, Icon, SimpleGrid, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { DiReact, DiJsBadge, DiNodejs, DiHtml5, DiCss3, DiAndroid } from 'react-icons/di';
import { SiNextDotJs, SiDotNet, SiTypescript } from 'react-icons/si';

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
    next: { color: '', text: 'Next', icon: SiNextDotJs },
    node: { color: '#026e00', text: 'NodeJS', icon: DiNodejs },
    js: { color: '#fcdc00', text: 'Javascript', icon: DiJsBadge },
    html: { color: '#e54c21', text: 'HTML', icon: DiHtml5 },
    css: { color: '#1672b6', text: 'CSS', icon: DiCss3 },
    net: { color: '#5127d5', text: 'ASP.NET', icon: SiDotNet },
    android: { color: '#a5c736', text: 'Android', icon: DiAndroid }
};

function Technologies(): ReactElement {
    return (
        <Flex direction="column" align="center" mt={10}>
            <Heading>Technologies</Heading>
            <Text fontSize={['sm', null, 'md', 'lg']} mt="7">
                These are the toolstacks I have worked on and have hands-on experience
            </Text>
            <SimpleGrid
                columns={{ xs: 3, lg: 4 }}
                spacing={{ xs: '30px', lg: '50px' }}
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

function RenderIcon({ iconData }: RenderIconProps): ReactElement {
    const { color, icon, text } = iconData;
    // Refer to Sizes here  https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/sizes.ts
    const responsiveSize = { xs: 12, md: 16, lg: 20 };
    return (
        <Flex direction="column" align="center">
            <Icon
                as={icon}
                width={responsiveSize}
                height={responsiveSize}
                _hover={{ transform: 'scale(1.2)', color }}
                transition="all .2s ease-in-out"
                color={useColorModeValue(color, 'currentColor')}
            />
            <Text fontWeight="bold" fontSize={{ xs: 'md', md: 'lg' }} mt="2">
                {text}
            </Text>
        </Flex>
    );
}

export { Technologies };
