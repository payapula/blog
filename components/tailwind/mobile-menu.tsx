import { Button } from '@/components/shadcn/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/shadcn/dropdown-menu';
import { FaBars } from 'react-icons/fa6';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { activeLinkBgClasses } from './header';
import { cn } from '@/lib/utils';
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export function MobileMenu() {
    const [open, setOpen] = React.useState(false);
    return (
        <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button className="ml-auto mr-5 h-10 w-10 p-1 md:hidden">
                    {open ? <IoCloseSharp size={24} /> : <FaBars size={20} />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex w-56 flex-col gap-2" align="end" alignOffset={-2}>
                <MobileMenuItem href={'/blog'}>Blog</MobileMenuItem>
                <MobileMenuItem href={'/quiz'}>Quiz</MobileMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

interface MobileMenuItemProps {
    children: React.ReactNode;
    href: string;
}

function MobileMenuItem({ children, href }: MobileMenuItemProps) {
    return (
        <DropdownMenuItem asChild>
            <NextLinkWrapper href={href}>{children}</NextLinkWrapper>
        </DropdownMenuItem>
    );
}

interface NextLinkWrapperProps {
    href: string;
    children: React.ReactNode;
}

/**
 * This component simply renders a anchor tag.
 *
 * Radix passes props and ref to this component - https://www.radix-ui.com/primitives/docs/guides/composition#composing-with-your-own-react-components
 *
 * These props and ref are spread to <Button />
 * which internally passes all of them to <a/> (via `asChild`).
 *
 * Went with this approach for multiple reasons like accessibility, SEO, etc.
 */
const NextLinkWrapper = React.forwardRef<HTMLButtonElement, NextLinkWrapperProps>(
    function NextLinkComposed({ href, children, ...props }, ref) {
        const router = useRouter();
        const isActive = router.pathname === href;
        const activeClass = activeLinkBgClasses;
        return (
            <NextLink href={href} passHref legacyBehavior>
                <Button variant="link" asChild ref={ref} {...props}>
                    <a
                        className={cn('!justify-start !text-lg !font-bold', {
                            [activeClass]: isActive
                        })}>
                        {children}
                    </a>
                </Button>
            </NextLink>
        );
    }
);
