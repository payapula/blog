import Cover, { PlaiceHolderProps } from 'types/cover';
import { ReactElement } from 'react';
import NextLink from 'next/link';
import { ChakraLink } from 'components/chakra-link';
import Image from 'next/image';

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
                Photo By
                <NextLink href={cover.author.url} passHref>
                    <ChakraLink ml={1}>{cover.author.name}</ChakraLink>
                </NextLink>
            </p>
        </div>
    );
}

export { PostCover };
