import { Label } from '@/components/shadcn/label';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/radio-group';

const options = ['option-one', 'option-two', 'option-three'];

/**
 * This component is not used in production.
 *
 * This was done to test radio group for Quiz components.
 */
export function RadioExample() {
    return (
        <RadioGroup defaultValue="option-one">
            {options.map((option) => {
                return <RadioItemExample option={option} key={option} />;
            })}
        </RadioGroup>
    );
}

export function RadioItemExample({ option }: { option: string }) {
    return (
        <div>
            <Label
                htmlFor={option}
                className="labelChecked group flex min-h-14 cursor-pointer items-center space-x-2 rounded-lg
                 p-2 
                 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                hover:bg-teal-100
                 dark:hover:bg-orange-700  
                 ">
                <RadioGroupItem
                    value={option}
                    id={option}
                    className="group-hover:scale-150
                    group-hover:border-teal-300
                    data-checked:scale-150 data-checked:bg-teal-300 dark:group-hover:border-orange-500 dark:data-checked:bg-orange-700"
                />
                <p>{option}</p>
            </Label>
        </div>
    );
}
