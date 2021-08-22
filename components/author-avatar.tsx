import { ReactElement } from 'react';
import { ChakraNextImage } from './chakra-next-image';
import profilePic from 'public/assets/resume/bharathikannanavatar.jpg';

function AuthorAvatar({ size }: { size: number }): ReactElement {
    return (
        <ChakraNextImage
            src={profilePic}
            alt="Picture of Bharathi Kannan"
            borderRadius="50%"
            width={size}
            height={size}
            placeholder="blur"
        />
    );
}

export { AuthorAvatar };
