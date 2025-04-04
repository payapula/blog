# Website

Portfolio Website & tech blog of Bharathi Kannan
Live at https://www.bharathikannan.com/

---

## 🚀 Tech Stack

-   [Next JS](https://nextjs.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote)

---

## 📘 Resources

-   [MDX Embed](https://www.mdx-embed.com/?path=/docs/mdx-embed--page)
-   [Blog Example with next mdx remote](https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote)

---

## 🙏🏽 Inspirations

-   [Kent C Dodds Blog](https://github.com/kentcdodds/kentcdodds.com)
-   [Leerob Blog](https://github.com/leerob/leerob.io)
-   [Chakra UI Website](https://github.com/chakra-ui/chakra-ui)

---

## Project Status

Please refer to [Projects](https://github.com/payapula/blog/projects)

---

## 📍 Installation

`npm install`

`npm run dev`

---

## 📲 View Preview Locally on Mobile

Windows:

Run `ipconfig` and get the ipaddress of your localhost

MAC:

Run `ifconfig` and get the ipaddress of your localhost

Open that address on the mobile with the same portnumber.

Ex: `192.168.1.9:3001`

## 🧵 Bundle Analyzer

### Overall View

`npm run analyze` - This will generate server and client bundle overviews.

### Dive Deeper into each bundle

If we want to dive deeper into each bundle, use the following technique with `source-map-explorer`

Enable `productionBrowserSourceMaps: true` in `next.config.js`
[Next Source Maps](https://nextjs.org/docs/advanced-features/source-maps)

and then `npm run build` then run the source-map-explorer command

Then navigate to `./next/static/chunks/pages/` directory and run the following command

`source-map-explorer <chunk_name>.js`

Make sure you have installed source-map-explorer:

`npm install -g source-map-explorer`

### More details with explanation

More details on Bundle Sizes, Next Build output and, etc. can be found in this PR - [Replace Chakra with Tailwind](https://github.com/payapula/blog/pull/111)

## 📕 Sitemap

Sitemap file gets updated automatically by this awesome package - [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

### How?

-   `npm run build` would be executed during deployment.
-   After build `postbuild` script would be executed, which updates sitemaps.

## 🧪 Playwright Tests

### Introduction

- In Github Actions, we are using docker images to run the tests.
- Refer to [PR that updates playwright actions](https://github.com/payapula/blog/pull/111/commits/b78b8864abbe3b979f7c1a3c8be1476c588f1872)
- [Playwright documentation link](https://playwright.dev/docs/ci#via-containers)
- This ensures the screenshot testing is consistent in local and in CI environments.

### Env Variables

- To properly switch environments, we have `.env.local` file.
- Refer to `.env.example` file and `playwright.config.ts` file to know how this env file is being read.
- DEV mode will use `html` report, compared to `list` report in production.
- In order to test Production URL, update the `.env.local` file appropriately and do `npx playwright test`.

### Screenshots

Its tricky to generate screenshots when tests are running in Github actions.

To update screenshots for blog posts in CI (Github actions), we need to build the
screenshots via docker in local.

👉 Check this [PR for instructions on first time set up](https://github.com/payapula/blog/pull/82).

#### To update Screenshots 

##### For local mac

Run `npx playwright test --update-snapshots`, it will generate new screenshot files for `-darwin.png`

> [!NOTE]  
> These screenshots are not validated in Github actions, as we are using docker container to run the
> test in Github actions. This `-darwin.png` screenshots are only for local testing purposes.

##### For CI (linux)

1. On root of the project directory, open a terminal (/blog).
2. Run `docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.33.0-jammy /bin/bash`.
    - This will sync the local folder with docker folder
3. `rm -rf node_modules` - Deletes node_modules 
    - This is to do fresh installation of node modules based on linux platform.
4. `npm install`
5. `npx playwright install --with-deps` - Reinstall playwright dependencies
6. `npx playwright test --update-snapshots` - Runs and updates screenshots
    - This step will generate new screenshots based on linux platform (`-linux.png`).
7. Commit the same to the repository.
8. Exit the docker shell with `exit`

> [!NOTE]  
> The downside of this approach is, after updating linux screenshots, on local we again need
> to remove `node_modules` and do fresh `npm install` for running the app.

## 💣 Find and Remove Unused Packages

### Check Unused Packages

Method 1: `npx npm-check`

Method 2: `npx depcheck`

### Remove Unused Packages

Ran this script after removing chakra

```bash
npm uninstall @chakra-ui/icons @chakra-ui/react  @emotion/react @emotion/styled classnames framer-motion lucide-react --save
```

## Notes

Eslint, Prettier Configs provided by [Arpit Bharti](https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46)
