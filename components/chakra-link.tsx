import { forwardRef, Ref } from 'react';
import { Link, LinkProps, useColorModeValue } from '@chakra-ui/react';

/**
 * Refer to sidebar-link.tsx of chakra-ui
 * https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/sidebar/sidebar-link.tsx
 */
const ChakraLink = forwardRef(function StyledChakraLink(
    props: LinkProps & { isActive?: boolean },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: Ref<any>
) {
    const { isActive, href, rel, target, ...rest } = props;
    const isInternal = href.startsWith('/') || href.startsWith('#');
    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            ref={ref}
            rel={isInternal ? rel : 'noopener noreferrer'}
            target={isInternal ? target : '_blank'}
            href={href}
            apply="general.link"
            color={useColorModeValue('link.color.light', 'link.color.dark')}
            _hover={{
                color: useColorModeValue('link.hover.light', 'link.hover.dark')
            }}
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

export { ChakraLink, ChakraMDXLink };
