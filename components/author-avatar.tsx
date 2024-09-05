import { ReactElement } from 'react';
import { ChakraNextImage } from './chakra-next-image';
import profilePic from 'public/assets/resume/bharathikannanavatar.jpg';

/**
 * tw-TODO
 *
 * * When updating images
 *
 * 1. Make sure to resize them to reduce the file size.
 * 2. Make sure the image is not clipped/cropped: Read about `objectFit` property.
 *  https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
 * 3. When I updated the image on May, 2024, Updated `objectFit` fron `contain` to
 * `cover`
 */
function AuthorAvatar({ size }: { size: number }): ReactElement {
    return (
        <ChakraNextImage
            src={profilePic}
            alt="Picture of Bharathi Kannan"
            borderRadius="50%"
            width={size}
            height={size}
            priority
            placeholder="blur"
            objectFit="cover"
        />
    );
}

export { AuthorAvatar };
