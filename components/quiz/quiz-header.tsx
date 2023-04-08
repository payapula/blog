import { GradientHeader } from 'components/gradient-header';
import React from 'react';

type Props = {
    title: string;
};

function QuizHeader({ title }: Props) {
    return (
        <GradientHeader
            overrides={{
                fontSize: ['2xl', null, null, '5xl']
            }}>
            {title}
        </GradientHeader>
    );
}

export default QuizHeader;
