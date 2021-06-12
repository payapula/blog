const mdx = {
    h1: {
        mt: '2rem',
        mb: '.25rem',
        lineHeight: 1.2,
        fontWeight: 'bold',
        fontSize: '1.875rem',
        letterSpacing: '-.025em'
    },
    h2: {
        mt: '3rem',
        mb: '0.5rem',
        lineHeight: 1.3,
        fontWeight: 'semibold',
        fontSize: '1.5rem',
        letterSpacing: '-.025em',
        '& + h3': {
            mt: '1.5rem'
        }
    },
    h3: {
        mt: '3rem',
        // mb: "0.5rem",
        lineHeight: 1.25,
        fontWeight: 'semibold',
        fontSize: '1.25rem',
        letterSpacing: '-.025em'
    },
    h4: {
        mt: '3rem',
        lineHeight: 1.375,
        fontWeight: 'semibold',
        fontSize: '1.125rem'
    },
    p: {
        mt: '1.25rem',
        lineHeight: 1.7,
        'blockquote &': {
            mt: 0,
            lineHeight: 1.7
        },
        fontSize: '1.125rem'
    },
    hr: {
        my: '4rem'
    },
    blockquote: {
        bg: 'orange.100',
        borderWidth: '1px',
        borderColor: 'orange.200',
        rounded: 'lg',
        px: '1.25rem',
        py: '1rem',
        my: '1.5rem'
    },
    ul: {
        mt: '1rem',
        ml: '1.25rem',
        lineHeight: 1.6,
        'blockquote &': { mt: 0 },
        '& > * + *': {
            mt: '0.25rem'
        }
    },
    li: {
        fontSize: '1.15rem',
        paddingBottom: '4px'
    },
    code: {
        rounded: 'sm',
        px: '1',
        fontSize: '0.875em',
        py: '2px',
        whiteSpace: 'nowrap',
        lineHeight: 'normal',
        fontFamily: 'Monaco,Menlo,Consolas,Courier New,monospace!important',
        border: '1px solid #1d1c1d21',
        borderRadius: '3px'
    }
};

export { mdx };
