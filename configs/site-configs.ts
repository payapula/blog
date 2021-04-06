// Inspired by Chakra - https://github.com/chakra-ui/chakra-ui/blob/main/website/configs/site-config.ts
import { NextSeoProps } from 'next-seo';

interface SiteConfig {
    general: {
        siteUrl: string;
        editUrl: string;
    };
    seo: NextSeoProps;
}

const siteConfig: SiteConfig = {
    general: {
        siteUrl: 'TBD',
        editUrl: 'https://github.com/payapula/blog/edit/develop/_posts/'
    },
    seo: {
        title: 'Bharathi Kannan Blog',
        defaultTitle: 'Bharathi Kannan Blog',
        titleTemplate: '%s | Bharathi Kannan Blog',
        description: "Bharathi Kannan's Personal Portfolio and Blog.",
        openGraph: {
            type: 'website',
            title: 'Bharathi Kannan Blog',
            description: "Bharathi Kannan's Personal Portfolio and Blog.",
            site_name: 'Bharathi Kannan'
        }
    }
};

export default siteConfig;
