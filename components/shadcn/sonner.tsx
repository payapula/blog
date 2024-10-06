import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: 'group toast group-[.toaster]:bg-green-700 group-[.toaster]:text-gray-100 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:border-neutral-800',
                    description: 'group-[.toaster]:text-gray-100',
                    closeButton: `group-[.toast]:bg-neutral-500 group-[.toast]:text-neutral-100 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-200
                            hover:group-[.toast]:bg-neutral-700 dark:hover:group-[.toast]:bg-neutral-500
                        `
                }
            }}
            closeButton={true}
            {...props}
        />
    );
};

export { Toaster };
