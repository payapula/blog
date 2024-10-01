import { Label } from '@/components/shadcn/label';
import { RadioGroupItem } from '@/components/shadcn/radio-group';
import { cn } from '@/lib/utils';

export function RadioItem({
    children,
    disabled,
    value
}: {
    value: string;
    disabled: boolean;
    children: React.ReactNode;
}) {
    return (
        <div>
            <Label
                htmlFor={value}
                className="labelChecked group flex min-h-14 cursor-pointer items-center space-x-2 rounded-lg
                 p-2 
                 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                hover:bg-teal-100
                 dark:hover:bg-orange-700  
                 ">
                <RadioGroupItem
                    disabled={disabled}
                    value={value}
                    id={value}
                    className={cn(
                        `data-checked:scale-150 data-checked:bg-teal-300  dark:data-checked:bg-orange-700`,
                        {
                            'group-hover:scale-150 group-hover:border-teal-300 dark:group-hover:border-orange-500':
                                !disabled
                        }
                    )}
                />
                {children}
            </Label>
        </div>
    );
}
