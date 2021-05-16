import { ReactElement } from 'react';
import { ChakraNextImage } from './chakra-next-image';

function AuthorAvatar({ size }: { size: number }): ReactElement {
    return (
        <ChakraNextImage
            src="/assets/resume/bharathikannanavatar.jpg"
            alt="Picture of Bharathi Kannan"
            borderRadius="50%"
            width={size}
            height={size}
        />
    );
}

export { AuthorAvatar };
