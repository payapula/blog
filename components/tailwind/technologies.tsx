// Inspired by https://github.com/guarmo/portfolio/blob/master/components/About.js
import { useColorModeValue, Icon } from '@chakra-ui/react';
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
import { Heading } from './heading';

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
    return (
        <div className="relative left-[calc(-50vw+50%)] mt-10 flex w-screen flex-col items-center bg-sky-50 py-10 dark:bg-gray-chakra">
            <Heading>Technologies</Heading>
            <p className="sm:text-md mt-7 text-center text-sm lg:text-lg">
                These are the toolstacks I have hands-on experience on
            </p>
            <div className="mt-[50px] grid w-[70%] grid-cols-3 gap-9 lg:grid-cols-4 lg:gap-12">
                {Object.entries(iconSet).map(([iconKey, iconValue]) => (
                    <RenderIcon key={iconKey} iconData={iconValue} />
                ))}
            </div>
        </div>
    );
}

interface RenderIconProps {
    iconData: IconMeta;
}

// Refer to Sizes here  https://github.com/chakra-ui/chakra-ui/blob/c2f0d1bb2a07fe6af5e53a1f216d80c9a7d6df72/packages/components/theme/src/foundations/sizes.ts
const responsiveSize = { xs: 12, md: 16, lg: 20 };

//tw-TODO
function RenderIcon({ iconData }: RenderIconProps): ReactElement {
    const { color, icon, text } = iconData;
    return (
        <div className="flex flex-col items-center">
            <Icon
                as={icon}
                width={responsiveSize}
                height={responsiveSize}
                _hover={{ transform: 'scale(1.2)', color }}
                transition="all .2s ease-in-out"
                color={useColorModeValue(color, 'currentColor')}
                aria-label={`Logo of ${text}`}
            />
            <p className="text-md mt-2 text-center font-bold md:text-lg" aria-hidden="true">
                {text}
            </p>
        </div>
    );
}

export { Technologies };
