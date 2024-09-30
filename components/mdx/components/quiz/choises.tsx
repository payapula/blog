import * as React from 'react';
import { Children } from 'react';
import { Radio, RadioGroup, useColorModeValue } from '@chakra-ui/react';

interface ChoisesProps {
    value: string;
    setValue: (value: string) => void;
    choiseElements: Array<typeof Radio>;
}

const getShadowForChoise = (color1, color2) => `0px 1px 0px 2px ${color1}, 0 1px 2px 0px ${color2}`;

export function Choises({ value, setValue, choiseElements }: ChoisesProps) {
    const totalChoises = Children.count(choiseElements);

    const choiseWithSeparator = [];
    Children.forEach(choiseElements, (child, index) => {
        choiseWithSeparator.push(child);
        if (totalChoises - 1 !== index) {
            choiseWithSeparator.push(<div className="mb-2 mt-2 border-t-2" key={index} />);
        }
    });

    const lightShadow = getShadowForChoise('rgba(0, 0, 0, 0.12)', 'rgba(0, 0, 0, 0.24)');
    const darkShadow = getShadowForChoise('rgba(255, 130, 47, 0.25)', 'rgba(95, 83, 76, 0.22)');
    const colorBoxShadow = useColorModeValue(lightShadow, darkShadow);

    const bgForChoise = useColorModeValue('teal.100', 'orange.700');
    const borderForCircle = useColorModeValue('teal.700', 'orange.100');

    const bgChecked = useColorModeValue('teal.300', 'orange.500');
    return (
        <RadioGroup
            name="form-name"
            onChange={setValue}
            value={value}
            mt="4"
            sx={{
                '.chakra-radio': {
                    borderRadius: '5px',
                    boxShadow: colorBoxShadow
                },
                '.chakra-radio:not([data-disabled]):hover': {
                    backgroundColor: bgForChoise
                },
                '.chakra-radio:not([data-disabled]):hover .chakra-radio__control': {
                    transform: 'scale(1.5)',
                    borderColor: borderForCircle
                },
                /**
                 * For initial selection
                 */
                '.chakra-radio__control[data-focus-visible]': {
                    transform: 'scale(1.5)',
                    borderColor: borderForCircle
                },
                '.chakra-radio[data-checked]': {
                    backgroundColor: bgChecked
                },
                '.chakra-radio[data-checked] .chakra-radio__control': {
                    transform: 'scale(1.5)',
                    borderColor: borderForCircle,
                    color: useColorModeValue('revert', 'initial'),
                    background: useColorModeValue('revert', 'initial')
                },
                '.chakra-radio p': {
                    mt: 0
                }
            }}>
            <div className="flex flex-col">{choiseWithSeparator}</div>
        </RadioGroup>
    );
}
