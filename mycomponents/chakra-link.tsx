import * as React from 'react';
import { Link, LinkProps, useColorModeValue } from '@chakra-ui/react';

/**
 * Refer to sidebar-link.tsx of chakra-ui
 * https://github.com/chakra-ui/chakra-ui/blob/main/website/src/components/sidebar/sidebar-link.tsx
 */
const ChakraLink = React.forwardRef(function StyledChakraLink(
    props: LinkProps & { isActive?: boolean },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>
) {
    const { isActive, href, rel, target, ...rest } = props;
    const isInternal = href.startsWith('/') || href.startsWith('#');
    return (
        <Link
            _activeLink={{
                bg: useColorModeValue('teal.50', 'rgba(48, 140, 122, 0.3)'),
                color: useColorModeValue('teal.700', 'teal.200'),
                fontWeight: '600'
            }}
            aria-current={isActive ? 'page' : undefined}
            {...rest}
            ref={ref}
            rel={isInternal ? rel : 'noopener noreferrer'}
            target={isInternal ? target : '_blank'}
            href={href}
            apply="general.link"
            color={useColorModeValue('teal.600', 'teal.500')}
        />
    );
});

export { ChakraLink };
