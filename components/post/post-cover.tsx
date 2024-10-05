import Cover, { PlaiceHolderProps } from 'types/cover';
import { ReactElement } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { TWLink } from '../tailwind/link';

interface PostCoverProps {
    cover: Cover;
    plaiceHolder: PlaiceHolderProps;
}

/**
 * Uses Image Blur from plaicehodler
 * https://plaiceholder.co/docs/usage#base64
 * https://github.com/vercel/next.js/discussions/26168#discussioncomment-877038
 *
 * until nextjs supports automatic blur from `require` imports
 * https://nextjs.org/docs/basic-features/image-optimization#image-imports
 * @returns {ReactElement}
 */
function PostCover({ cover, plaiceHolder }: PostCoverProps): ReactElement {
    return (
        <div className="mt-8">
            <Image
                {...plaiceHolder.img}
                alt={cover.alt}
                blurDataURL={plaiceHolder.base64}
                placeholder="blur"
                objectFit="contain"
                priority
            />
            <p className="text-center">
                Photo By <span className="ml-1" />
                <NextLink href={cover.author.url} passHref>
                    <TWLink>{cover.author.name}</TWLink>
                </NextLink>
            </p>
        </div>
    );
}

export { PostCover };
