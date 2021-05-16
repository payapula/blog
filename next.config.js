// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    images: {
        domains: ['raw.githubusercontent.com']
    }
    // https://nextjs.org/docs/advanced-features/source-maps
    // The below code is needed to generate source-map visualizations
    // productionBrowserSourceMaps: true
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // Note: we provide webpack above so you should not `require` it
    //     // Perform customizations to webpack config

    //     // console.log(JSON.stringify(config.module.rules, null, 2));

    //     //https://webpack.js.org/configuration/devtool/#devtool
    //     config.devtool = 'source-map';
    //     // For debugging
    //     config.mode = 'development';
    //     // For easier debugging to know what is contained in chunks
    //     config.optimization.minimize = false;

    //     // This would function would be called twice - one for server and other for client
    //     if (config.name === 'client') {
    //         console.log(JSON.stringify(config, null, 2));
    //     }
    //     // Important: return the modified config
    //     return config;
    // }
});
