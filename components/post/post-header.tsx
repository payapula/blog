import { ReactElement } from 'react';
import { GradientHeader } from 'components/gradient-header';

interface PostHeaderProps {
    title: string;
}
function PostHeader({ title }: PostHeaderProps): ReactElement {
    return <GradientHeader textSizeClass="text-4xl md:text-6xl">{title}</GradientHeader>;
}

export { PostHeader };
