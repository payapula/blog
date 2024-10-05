import { GradientHeader } from 'components/gradient-header';
import React from 'react';

type Props = {
    title: string;
};

function QuizHeader({ title }: Props) {
    return <GradientHeader textSizeClass="text-2xl md:text-5xl">{title}</GradientHeader>;
}

export default QuizHeader;
