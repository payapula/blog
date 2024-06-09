var gitDateExtractor = require('git-date-extractor');

gitDateExtractor.getStamps(
    {
        onlyIn: '_posts',
        outputToFile: true,
        outputFileName: 'timestamps.json',
        /**
         * To work along with pre-commit hook
         *
         * https://www.npmjs.com/package/git-date-extractor#automating-the-check-in-of-the-timestamp-file-into-version-control-git-add
         */
        outputFileGitAdd: true,
        gitCommitHook: 'pre'
    },
    (stamps) => {
        console.log('Generating Timestamps', stamps);
    }
);
