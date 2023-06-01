import theme from 'styles/theme/dracula-soft';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { useColorModeValue, Box } from '@chakra-ui/react';

// Code is Provided by Kent.C.Dodds https://github.com/kentcdodds/kentcdodds.com/blob/main/src/components/mdx/code.js
// Same is used in chakra UI - https://github.com/chakra-ui/chakra-ui/blob/97b6b0111f21af8bfce675e34d7c32f3ff2cadf0/website/src/components/codeblock/highlight.tsx

function calculateLinesToHighlight(highlight: number[]) {
    if (highlight?.length) {
        const lineNumbers = highlight.map((v) => [v]);
        return (index) => {
            const lineNumber = index + 1;
            const inRange = lineNumbers.some(([start, end]) =>
                end ? lineNumber >= start && lineNumber <= end : lineNumber === start
            );
            return inRange;
        };
    } else {
        return () => false;
    }
}

function checkToHideLineNums(noline) {
    return !!noline;
}

interface CodeProps {
    codeString: string;
    language: Language;
    highlight: number[];
    noline: boolean;
}

function Code({ codeString, language, highlight, noline }: CodeProps): JSX.Element {
    const shouldHighlightLine = calculateLinesToHighlight(highlight);
    const shouldHideLineNums = checkToHideLineNums(noline);
    const color = useColorModeValue('#0a1126', '#0a0707');
    return (
        <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => {
                const customStyles = {
                    ...style,
                    backgroundColor: color
                };
                return (
                    <Box
                        overflow="auto"
                        ml="-20px"
                        mr="-20px"
                        sx={{
                            '@media (min-width: 1201px)': {
                                marginLeft: '-60px',
                                marginRight: '-60px'
                            }
                        }}>
                        <Box
                            as="pre"
                            className={className}
                            style={customStyles}
                            float="left"
                            minW="100%"
                            overflow="initial"
                            lineHeight="1.6"
                            borderRadius="4px"
                            fontSize={{
                                base: '0.75rem',
                                lg: '0.875rem',
                                xl: '1rem'
                            }}
                            p="10px">
                            {tokens.map((line, i) => {
                                const objProps = shouldHighlightLine(i)
                                    ? {
                                          backgroundColor: 'rgb(167 185 255 / 20%)',
                                          m: '0',
                                          ml: '-10px',
                                          padding: '0px 5px',
                                          borderLeft: '5px solid rgb(130 230 217)'
                                      }
                                    : {};
                                return (
                                    <Box
                                        key={i}
                                        {...getLineProps({
                                            line,
                                            key: i
                                        })}
                                        {...objProps}>
                                        {shouldHideLineNums ? (
                                            <Box as="span" pl="2em"></Box>
                                        ) : (
                                            <Box
                                                as="span"
                                                display="inline-block"
                                                width="2em"
                                                userSelect="none"
                                                color="rgb(246 246 244 / 50%)">
                                                {i + 1}
                                            </Box>
                                        )}
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token, key })} />
                                        ))}
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                );
            }}
        </Highlight>
    );
}

// https://github.com/kentcdodds/kentcdodds.com/blob/cec91ed2b6c7235f69a419789e6d83d21553e57b/src/components/mdx/index.js

/**
 * We are doing this to support both <pre> and <code> tags generated by MDX
 *
 */
function preToCodeBlock(preProps) {
    if (
        // children is code element
        preProps.children &&
        // code props
        preProps.children.props
    ) {
        const { highlight, noline } = preProps;
        const { children: codeString, className = '', ...props } = preProps.children.props;

        const matches = className.match(/language-(?<lang>.*)/);

        return {
            codeString: codeString.trim(),
            className,
            language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : '',
            highlight,
            noline,
            ...props
        };
    }
}

export { Code, preToCodeBlock };
