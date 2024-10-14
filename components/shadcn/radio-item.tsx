import { Label } from '@/components/shadcn/label';
import { RadioGroupItem } from '@/components/shadcn/radio-group';
import { cn } from '@/lib/utils';

export function RadioItem({
    children,
    disabled,
    value,
    ariaLabel
}: {
    value: string;
    disabled: boolean;
    children: React.ReactNode;
    ariaLabel: string;
}) {
    return (
        <div>
            <Label
                /**
                 * labelChecked is styled from globals.css
                 */
                className="labelChecked radioOptionShadow group flex min-h-14 cursor-pointer items-center space-x-2
                 rounded-lg p-2
                hover:bg-teal-100
                 dark:hover:bg-orange-700  
                 ">
                <RadioGroupItem
                    disabled={disabled}
                    value={value}
                    aria-labelledby={ariaLabel}
                    className={cn(
                        `data-checked:scale-150 data-checked:bg-teal-300  dark:data-checked:bg-orange-700`,
                        {
                            'focus-visible:scale-150 focus-visible:border-teal-300 group-hover:scale-150 group-hover:border-teal-300 dark:focus-visible:border-orange-500 dark:group-hover:border-orange-500':
                                !disabled
                        }
                    )}
                />
                {children}
            </Label>
        </div>
    );
}
