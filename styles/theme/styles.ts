// general can include any number of custom keys
const general = {
    link: {
        fontWeight: 'semibold',
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        borderBottom: '1px dashed',
        _hover: {
            borderBottom: '1px solid'
        }
    },
    focus: {
        _focus: {
            outline: '2px dashed teal',
            boxShadow: 'none'
        }
    }
};

const fonts = {
    body: 'Roboto, sans-serif, system-ui',
    heading: 'Roboto, sans-serif, system-ui'
};

export { general, fonts };
