/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import { forwardRef, Ref } from 'react';

import { cn } from '@/lib/utils';
import { Heading, HeadingProps } from './heading';

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
    shouldApplyBorder?: boolean;
}

const TWLink = forwardRef(function StyledTWLink(props: TWLinkProps, ref: Ref<HTMLAnchorElement>) {
    const {
        isActive,
        href,
        rel,
        target,
        textSize,
        fontWeight,
        display,
        flex,
        shouldApplyBorder = true,
        ...rest
    } = props;
    const isInternal = href.startsWith('/') || href.startsWith('#');
    const textClasses = textSize ?? '';
    const fontClasses = fontWeight ?? 'font-semibold';
    const displayClasses = display ?? 'inline';
    const flexClasses = flex ?? '';
    const borderStyles = shouldApplyBorder
        ? `border-b border-dashed border-current hover:border-solid`
        : '';
    return (
        <a
            aria-current={isActive ? 'page' : undefined}
            ref={ref}
            rel={isInternal ? rel : 'noopener noreferrer'}
            target={isInternal ? target : '_blank'}
            href={href}
            className={`
                text-teal-800 
                dark:text-teal-300 ${borderStyles} ${textClasses} ${fontClasses}
                ${displayClasses} ${flexClasses}
                `}
            {...rest}
        />
    );
});

interface TWMDXLinkProps {
    href?: string;
    className?: string;
    children?: React.ReactNode;
}

const TWMDXLink = ({ href, className = '', ...rest }: TWMDXLinkProps) => {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    return (
        <a
            aria-current={undefined}
            rel={isInternal ? undefined : 'noopener noreferrer'}
            target={isInternal ? undefined : '_blank'}
            href={href}
            className={cn(
                `border-b border-dashed border-current
                font-semibold text-teal-800
                outline-offset-2 hover:border-solid
                dark:text-teal-400
                dark:hover:text-teal-200
                `,
                className
            )}
            {...rest}
        />
    );
};

type TWHeadingLinkProps = {
    id: string;
    children: React.ReactNode;
    as: HeadingProps['as'];
    className?: string;
};

const TWHeadingLink = ({ id, as = 'h2', children, className, ...props }: TWHeadingLinkProps) => {
    return (
        <>
            <Heading {...props} id={id} as={as} className={`${className} group`}>
                {children}
                <TWMDXLink
                    className="ml-2 opacity-0 focus:opacity-100 focus:shadow-sm group-hover:opacity-100"
                    href={`#${id}`}>
                    #
                </TWMDXLink>
            </Heading>
        </>
    );
};

export { TWLink, TWMDXLink, TWHeadingLink };
