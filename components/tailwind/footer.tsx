import { Link, useToast } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import React, { ReactElement } from 'react';
import { SiGmail } from 'react-icons/si';
import siteConfig from 'configs/site-configs';
import { ChakraLink } from '../chakra-link';
import VisuallyHidden from './visuallyHidden';

interface IconLinkProps {
    href: string;
    children: React.ReactNode;
    isExternal?: boolean;
}

const IconLink = ({ href, children, isExternal = false }: IconLinkProps) => (
    <Link
        href={href}
        isExternal={isExternal}
        sx={{
            borderRadius: '4px'
        }}>
        {children}
    </Link>
);

function GMAIL() {
    const [isAppleDevice, setIsAppleDevice] = React.useState(false);
    const toast = useToast();

    React.useEffect(() => {
        // iOS doesn't easily let you copy to clipboard, hence navigating those users
        // directly to Default Mail App
        setIsAppleDevice(!!navigator.userAgent.match(/ipad|ipod|iphone/i));
    }, []);

    if (isAppleDevice) {
        return (
            <IconLink href={`mailto:${siteConfig.general.authorEmail}`}>
                <VisuallyHidden>Send Email to Bharathi Kannan</VisuallyHidden>
                <SocialIcons icon={SiGmail} hoverClass="text-[#ea4335]" ariaLabel="Logo of Gmail" />
            </IconLink>
        );
    }

    return (
        <button
            className="h-auto bg-transparent hover:bg-transparent active:bg-transparent"
            onClick={() => {
                navigator.clipboard.writeText(siteConfig.general.authorEmail);
                toast({
                    title: 'Email ID Copied!',
                    position: 'top-left',
                    description:
                        'Email Address copied to clipboard. Paste it in your favorite mail client to send out an email!',
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                });
            }}>
            <VisuallyHidden>Copy Bharathi Kannan&apos;s Email address</VisuallyHidden>
            <SocialIcons icon={SiGmail} hoverClass="text-[#ea4335]" ariaLabel="Logo of Gmail" />
        </button>
    );
}

function Footer(): ReactElement {
    return (
        <footer className="relative left-[calc(-50vw+49%)] h-[150px] w-screen bg-sky-50 dark:bg-gray-800">
            <div className="mt-10 flex h-[140px] flex-col items-center justify-around">
                <div className="mt-5 flex w-[200px] justify-between">
                    <GMAIL />
                    <IconLink href={siteConfig.general.twitter} isExternal>
                        <VisuallyHidden>Open Twitter Profile of Bharathi Kannan</VisuallyHidden>
                        <SocialIcons
                            icon={FaTwitter}
                            hoverClass="text-[#1DA1F2]"
                            ariaLabel="Logo of Twitter"
                        />
                    </IconLink>
                    <IconLink href={siteConfig.general.linkedIn} isExternal>
                        <VisuallyHidden>Open LinkedIn Profile of Bharathi Kannan</VisuallyHidden>
                        <SocialIcons
                            icon={FaLinkedin}
                            hoverClass="text-[#0e76a8]"
                            ariaLabel="Logo of LinkedIn"
                        />
                    </IconLink>
                </div>
                <ChakraLink ml={3} href={siteConfig.general.github}>
                    <span role="img" aria-label="Heart" className="mr-2">
                        ❤️
                    </span>
                    Open sourced on Github
                    <span role="img" aria-label="Heart" className="ml-2">
                        ❤️
                    </span>
                </ChakraLink>
            </div>
        </footer>
    );
}

interface SocialIconsProps {
    icon: IconType;
    hoverClass: string;
    ariaLabel: string;
}

const SocialIcons = ({ icon, hoverClass, ariaLabel }: SocialIconsProps) => {
    const IconComponent = icon;
    return (
        <IconComponent className={`h-8 w-8 cursor-pointer ${hoverClass}`} aria-label={ariaLabel} />
    );
};

export default Footer;
