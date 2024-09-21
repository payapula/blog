/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import { forwardRef, Ref } from 'react';
import { Heading, HeadingProps, Link, LinkProps, useColorModeValue } from '@chakra-ui/react';

/**
 * Refer to sidebar-link.tsx of chakra-ui
 * https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/sidebar/sidebar-link.tsx
 */
interface TWLinkProps {
    href?: string;
    isActive?: boolean;
    rel?: string;
    target?: string;
    children?: React.ReactNode;
    textSize?: string;
    fontWeight?: string;
    display?: string;
    flex?: string;
}

const TWLink = forwardRef(function StyledTWLink(props: TWLinkProps, ref: Ref<HTMLAnchorElement>) {
    const { isActive, href, rel, target, textSize, fontWeight, display, flex, ...rest } = props;
    const isInternal = href.startsWith('/') || href.startsWith('#');
    const textClasses = textSize ?? '';
    const fontClasses = fontWeight ?? 'font-semibold';
    const displayClasses = display ?? 'inline';
    const flexClasses = flex ?? '';
    return (
        <a
            aria-current={isActive ? 'page' : undefined}
            ref={ref}
            rel={isInternal ? rel : 'noopener noreferrer'}
            target={isInternal ? target : '_blank'}
            href={href}
            className={`border-b border-dashed border-current
                text-teal-800 hover:border-solid
                dark:text-teal-300 ${textClasses} ${fontClasses}
                ${displayClasses} ${flexClasses}
                `}
            {...rest}
        />
    );
});

const ChakraMDXLink = ({ href, ...rest }: LinkProps): ReturnType<typeof Link> => {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    return (
        <Link
            aria-current={undefined}
            rel={isInternal ? undefined : 'noopener noreferrer'}
            target={isInternal ? undefined : '_blank'}
            href={href}
            apply="general.link"
            color={useColorModeValue('link.color.light', 'link.color.dark')}
            _hover={{
                color: useColorModeValue('link.hover.light', 'link.hover.dark')
            }}
            {...rest}
        />
    );
};

type ChakraHeadingLinkProps = {
    id: string;
    children: React.ReactNode;
} & HeadingProps;

const ChakraHeadingLink = ({ id, as = 'h2', children, ...props }: ChakraHeadingLinkProps) => {
    return (
        <>
            <Heading {...props} id={id} role="group" as={as}>
                {children}
                <ChakraMDXLink
                    ml={2}
                    href={`#${id}`}
                    aria-current={undefined}
                    opacity={0}
                    _focus={{ opacity: 1, boxShadow: 'outline' }}
                    _groupHover={{ opacity: 1 }}>
                    #
                </ChakraMDXLink>
            </Heading>
        </>
    );
};

export { TWLink, ChakraMDXLink, ChakraHeadingLink };
