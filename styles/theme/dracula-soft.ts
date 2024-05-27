import { PrismTheme } from 'prism-react-renderer';

const theme: PrismTheme = {
    plain: {
        color: '#f6f6f4',
        backgroundColor: '#282a36'
    },
    styles: [
        {
            types: ['prolog', 'constant', 'builtin'],
            style: {
                color: 'rgb(191, 158, 238)'
            }
        },
        {
            types: ['inserted', 'function', 'attr-name'],
            style: {
                color: 'rgb(98, 232, 132)'
            }
        },
        {
            types: ['deleted'],
            style: {
                color: 'rgb(238, 102, 102)'
            }
        },
        {
            types: ['changed'],
            style: {
                color: 'rgb(255, 184, 108)'
            }
        },
        {
            types: ['punctuation', 'class-name'],
            style: {
                color: 'rgb(151, 225, 241)'
            }
        },
        {
            types: ['string', 'char', 'tag', 'selector'],
            style: {
                color: 'rgb(242, 134, 196)'
            }
        },
        {
            types: ['variable'],
            style: {
                color: 'rgb(191, 158, 238)',
                fontStyle: 'italic'
            }
        },
        {
            types: ['comment'],
            style: {
                color: 'rgb(123, 127, 139)'
            }
        },
        {
            types: ['boolean'],
            style: {
                color: 'rgb(185, 153, 230)'
            }
        },
        {
            types: ['keyword', 'operator'],
            style: { color: '#F286C4' }
        },
        {
            types: ['parameter'],
            style: { color: '#FFB86C', fontStyle: 'italic' }
        },
        {
            types: ['plain'],
            style: { color: '#FFB86C' }
        },
        {
            types: ['symbol'],
            style: {
                color: 'rgb(246, 246, 244)'
            }
        },
        {
            types: ['string', 'attr-value'],
            style: {
                color: 'rgb(214, 220, 143)'
            }
        }
    ]
};

export default theme;
