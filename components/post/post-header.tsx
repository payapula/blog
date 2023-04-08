import { ReactElement } from 'react';
import { GradientHeader } from 'components/gradient-header';

interface PostHeaderProps {
    title: string;
}
function PostHeader({ title }: PostHeaderProps): ReactElement {
    return <GradientHeader>{title}</GradientHeader>;
}

export { PostHeader };
