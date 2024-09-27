import { ReactElement } from 'react';
import Image from 'next/image';
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
        <Image
            src={profilePic}
            alt="Picture of Bharathi Kannan"
            className="rounded-full"
            width={size}
            height={size}
            priority
            placeholder="blur"
            objectFit="cover"
        />
    );
}

export { AuthorAvatar };
