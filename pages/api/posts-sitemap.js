import { SitemapStream, streamToPromise } from 'sitemap';

/**
 * REFER : https://linguinecode.com/post/add-robots-txt-file-sitemaps-nextjs
 * Added SiteMap to robots.txt file as well
 */
// eslint-disable-next-line
export default async (req, res) => {
    try {
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`,
            cacheTime: 600000
        });

        // List of posts
        const posts = [
            { url: 'minimizing-lodash-bundle-size' },
            { url: 'simple-introduction-to-chakra' },
            {
                url: 'react-hooks-dependencies-and-stale-closures'
            },
            { url: 'react-useeffect-flow' },
            { url: 'react-is-just-javascript' }
        ];

        smStream.write({
            url: `https://${req.headers.host}`,
            changefreq: 'daily',
            priority: 0.9
        });

        // Create each URL row
        posts.forEach((post) => {
            smStream.write({
                url: `/blog/${post.url}`,
                changefreq: 'daily',
                priority: 0.9
            });
        });

        smStream.write({
            url: `https://${req.headers.host}/blog`,
            changefreq: 'daily',
            priority: 0.9
        });

        // End sitemap stream
        smStream.end();

        // XML sitemap string
        const sitemapOutput = (await streamToPromise(smStream)).toString();

        // Change headers
        res.writeHead(200, {
            'Content-Type': 'application/xml'
        });

        // Display output to user
        res.end(sitemapOutput);
    } catch (e) {
        res.send(JSON.stringify(e));
    }
};
