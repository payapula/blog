// eslint-disable-next-line @typescript-eslint/no-var-requires
const gitDateExtractor = require('git-date-extractor');

gitDateExtractor.getStamps(
    {
        onlyIn: '_posts',
        outputToFile: true,
        outputFileName: 'timestamps.json'
    },
    (stamps) => {
        // eslint-disable-next-line no-console
        console.log('stamps', stamps);
    }
);

export {};
