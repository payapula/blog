// Inspired by Chakra - https://github.com/chakra-ui/chakra-ui/blob/main/website/configs/site-config.ts
import { NextSeoProps } from 'next-seo';

interface SiteConfig {
    general: {
        siteUrl: string;
        editUrl: string;
        authorEmail: string;
        twitter: string;
        linkedIn: string;
    };
    seo: NextSeoProps;
}

const siteConfig: SiteConfig = {
    general: {
        siteUrl: 'https://www.bharathikannan.com',
        editUrl: 'https://github.com/payapula/blog/edit/develop/_posts/',
        authorEmail: 'bharathikannanv05@gmail.com',
        twitter: 'https://twitter.com/bharathispeaks',
        linkedIn: 'https://linkedin.com/in/bharathi-kannan-80968170'
    },
    seo: {
        title: 'Bharathi Kannan Blog',
        defaultTitle: 'Bharathi Kannan Blog',
        titleTemplate: '%s | Bharathi Kannan Blog',
        description: "Bharathi Kannan's Portfolio and Blog.",
        openGraph: {
            type: 'website',
            title: 'Bharathi Kannan Blog',
            description: "Bharathi Kannan's Portfolio and Blog.",
            site_name: 'Bharathi Kannan'
        }
    }
};

export default siteConfig;
