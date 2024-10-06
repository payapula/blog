import * as React from 'react';
import { Children } from 'react';
import { RadioGroup } from '@/components/shadcn/radio-group';

interface ChoisesProps {
    value: string;
    setValue: (value: string) => void;
    choiseElements: Array<unknown>;
}

export function Choises({ value, setValue, choiseElements }: ChoisesProps) {
    const totalChoises = Children.count(choiseElements);

    const choiseWithSeparator = [];
    Children.forEach(choiseElements, (child, index) => {
        choiseWithSeparator.push(child);
        if (totalChoises - 1 !== index) {
            choiseWithSeparator.push(
                <div className="mb-2 mt-2 border-t-[1px] dark:border-neutral-600" key={index} />
            );
        }
    });

    return (
        <RadioGroup className="mt-4" value={value} onValueChange={setValue}>
            <div className="flex flex-col">{choiseWithSeparator}</div>
        </RadioGroup>
    );
}
