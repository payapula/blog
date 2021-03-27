// Full tutorial for ESLint Configs - https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46
// Added - https://github.com/mdx-js/eslint-mdx
// Parsing error - https://github.com/mdx-js/eslint-mdx/issues/250
// overrides - https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react-hooks'],
    root: true, // Make sure eslint picks up the config at the root of the directory
    parserOptions: {
        ecmaVersion: 2020, // Use the latest ecmascript standard
        sourceType: 'module', // Allows using import/export statements
        ecmaFeatures: {
            jsx: true // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the react version
        }
        // 'mdx/code-blocks': true
    },
    env: {
        browser: true, // Enables browser globals like window and document
        amd: true, // Enables require() and define() as global variables as per the amd spec.
        node: true // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:mdx/recommended'
        // 'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
        // 'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Use our .prettierrc file as source
    },
    overrides: [
        {
            files: ['*.mdx', '*.md'],
            parser: 'eslint-mdx'
        }
    ]
};
