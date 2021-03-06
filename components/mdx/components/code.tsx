/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import theme from 'styles/theme/dracula-soft';
import { bpDesktopOnly } from 'styles/theme/breakpoints';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { useColorModeValue } from '@chakra-ui/react';

// Code is Provided by Kent.C.Dodds https://github.com/kentcdodds/kentcdodds.com/blob/main/src/components/mdx/code.js
// Same is used in chakra UI - https://github.com/chakra-ui/chakra-ui/blob/97b6b0111f21af8bfce675e34d7c32f3ff2cadf0/website/src/components/codeblock/highlight.tsx

const RX_LINE_NUMS = /{([\d,-]+)}/;

const RX_NO_LINE = /noline/;

const wrapperStyles = css`
    overflow: auto;
    margin-left: -20px;
    margin-right: -20px;
    ${bpDesktopOnly} {
        margin-left: -80px;
        margin-right: -80px;
    }
`;

const preStyles = css`
    float: left;
    min-width: 100%;
    overflow: initial;
    line-height: 1.6;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
`;

function calculateLinesToHighlight(meta) {
    if (RX_LINE_NUMS.test(meta)) {
        const lineNumbers = RX_LINE_NUMS.exec(meta)[1]
            .split(',')
            .map((v) => v.split('-').map((y) => parseInt(y, 10)));
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

function checkToHideLineNums(meta) {
    return RX_NO_LINE.test(meta);
}

interface CodeProps {
    codeString: string;
    language: Language;
    metastring: unknown;
}

function Code({ codeString, language, metastring }: CodeProps): JSX.Element {
    const shouldHighlightLine = calculateLinesToHighlight(metastring);
    const shouldHideLineNums = checkToHideLineNums(metastring);
    const color = useColorModeValue('#0a1126', '#0a0707');
    return (
        <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => {
                const customStyles = {
                    ...style,
                    backgroundColor: color
                };
                return (
                    <div css={wrapperStyles}>
                        <pre className={className} style={customStyles} css={preStyles}>
                            {tokens.map((line, i) => (
                                <div
                                    key={i}
                                    {...getLineProps({
                                        line,
                                        key: i
                                    })}
                                    css={css`
                                        ${shouldHighlightLine(i) &&
                                        `
                                        background-color: rgb(167 185 255 / 20%);
                                        margin: 0;
                                        margin-left: -10px;
                                        padding: 0px 5px;
                                        border-left: 5px solid rgb(130 230 217);
                                        `}
                                    `}>
                                    {shouldHideLineNums ? (
                                        <span
                                            css={css`
                                                padding-left: 2em;
                                            `}></span>
                                    ) : (
                                        <span
                                            css={css`
                                                display: inline-block;
                                                width: 2em;
                                                user-select: none;
                                                color: rgb(246 246 244 / 50%);
                                            `}>
                                            {i + 1}
                                        </span>
                                    )}
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    </div>
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
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function preToCodeBlock(preProps) {
    if (
        // children is code element
        preProps.children &&
        // code props
        preProps.children.props &&
        // if children is actually a <code>
        preProps.children.props.mdxType === 'code'
    ) {
        // we have a <pre><code> situation
        const { children: codeString, className = '', ...props } = preProps.children.props;

        const matches = className.match(/language-(?<lang>.*)/);

        return {
            codeString: codeString.trim(),
            className,
            language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : '',
            ...props
        };
    }
}

export { Code, preToCodeBlock };
