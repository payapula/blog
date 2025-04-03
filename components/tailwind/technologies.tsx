// Inspired by https://github.com/guarmo/portfolio/blob/master/components/About.js
import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { DiReact, DiJsBadge, DiNodejs, DiHtml5, DiCss3 } from 'react-icons/di';
import {
    SiNextdotjs,
    SiTypescript,
    SiShadcnui,
    SiSupabase,
    SiAwsamplify,
    SiTailwindcss,
    SiRemix
} from 'react-icons/si';
import { Heading } from './heading';

type IconMeta = {
    colorClasses: string;
    text: string;
    icon: IconType;
};

type IconSet = {
    [key in string]: IconMeta;
};

const iconSet: IconSet = {
    react: { colorClasses: 'hover:text-[#61dafb] text-[#61dafb]', text: 'React', icon: DiReact },
    next: { colorClasses: '', text: 'NextJS', icon: SiNextdotjs },
    remix: { colorClasses: '', text: 'Remix', icon: SiRemix },
    ts: {
        colorClasses: 'hover:text-[#3178c6] text-[#3178c6]',
        text: 'TypeScript',
        icon: SiTypescript
    },
    js: {
        colorClasses: 'hover:text-[#fcdc00] text-[#fcdc00]',
        text: 'Javascript',
        icon: DiJsBadge
    },
    tailwind: {
        colorClasses: 'hover:text-[#34b7f1] text-[#34b7f1]',
        text: 'TailwindCSS',
        icon: SiTailwindcss
    },
    shadcn: {
        colorClasses: 'hover:text-black text-black',
        text: 'Shadcn/UI',
        icon: SiShadcnui
    },
    node: { colorClasses: 'hover:text-[#026e00] text-[#026e00]', text: 'NodeJS', icon: DiNodejs },
    supabase: {
        colorClasses: 'hover:text-[#3dcf8e] text-[#3dcf8e]',
        text: 'Supabase',
        icon: SiSupabase
    },
    amplify: {
        colorClasses: 'hover:text-[#FF9900] text-[#FF9900]',
        text: 'AWS Amplify',
        icon: SiAwsamplify
    },
    html: { colorClasses: 'hover:text-[#e54c21] text-[#e54c21]', text: 'HTML', icon: DiHtml5 },
    css: { colorClasses: 'hover:text-[#1672b6] text-[#1672b6]', text: 'CSS', icon: DiCss3 }
};

function Technologies(): ReactElement {
    return (
        <div className="mt-10 flex flex-col items-center py-10 dark:bg-gray-chakra">
            <Heading className="text-3xl font-bold md:text-4xl">Technologies</Heading>
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

// @deprecated Refer to chakra responsive Sizes here  https://github.com/chakra-ui/chakra-ui/blob/c2f0d1bb2a07fe6af5e53a1f216d80c9a7d6df72/packages/components/theme/src/foundations/sizes.ts
function RenderIcon({ iconData }: RenderIconProps): ReactElement {
    const { colorClasses, icon, text } = iconData;
    const IconComponent = icon;
    return (
        <div className="flex flex-col items-center">
            <IconComponent
                //@prettier-ignore
                className={`
                    transition-all duration-200 ease-in-out
                    hover:scale-125 xs:h-12 xs:w-12
                    md:h-16
                    md:w-16
                    lg:h-20
                    lg:w-20
                    dark:text-current
                    ${colorClasses}
                `}
                title={`Logo of ${text}`}
            />
            <p className="text-md mt-2 text-center font-bold md:text-lg" aria-hidden="true">
                {text}
            </p>
        </div>
    );
}

export { Technologies };
