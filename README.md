# Website

Portfolio Website & tech blog of Payapula
Live at https://www.bharathikannan.com/

---

## Tech Stack

-   [Next JS](https://nextjs.org/)
-   [Chakra UI](https://chakra-ui.com/)
-   [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote)

---

## Resources

-   [MDX Embed](https://www.mdx-embed.com/?path=/docs/mdx-embed--page)
-   [Blog Example with next mdx remote](https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote)

---

## Inspirations

-   [Kent C Dodds Blog](https://github.com/kentcdodds/kentcdodds.com)
-   [Leerob Blog](https://github.com/leerob/leerob.io)
-   [Chakra UI Website](https://github.com/chakra-ui/chakra-ui)

---

## Project Status

Please refer to [Projects](https://github.com/payapula/blog/projects)

---

## Installation

`npm install`

`npm run dev`

---

## View Preview Locally on Mobile

Windows:

Run `ipconfig` and get the ipaddress of your localhost

MAC:

Run `ifconfig` and get the ipaddress of your localhost

Open that address on the mobile with the same portnumber.

Ex: `192.168.1.9:3001`

## Bundle Analyzer

`npm run analyze`

Enable `productionBrowserSourceMaps: true` in `next.config.js`
[Next Source Maps](https://nextjs.org/docs/advanced-features/source-maps)

and then `npm run build` then run the source-map-explorer command

`source-map-explorer chunk_name.js`

Make sure you have installed source-map-explorer:

`npm install -g source-map-explorer`

## Sitemap

Sitemap file gets updated automatically by this awesome package - [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

### How?

-   `npm run build` would be executed during deployment.
-   After build `postbuild` script would be executed, which updates sitemaps.

## Notes

Eslint, Prettier Configs provided by [Arpit Bharti](https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46)
