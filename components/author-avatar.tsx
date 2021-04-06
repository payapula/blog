import { ReactElement } from 'react';
import { ChakraNextImage } from './chakra-next-image';

function AuthorAvatar({ size }: { size: number }): ReactElement {
    return (
        <ChakraNextImage
            src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
            alt="Picture of Bharathi Kannan"
            borderRadius="50%"
            width={size}
            height={size}
        />
    );
}

export { AuthorAvatar };
