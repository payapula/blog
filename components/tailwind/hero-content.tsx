import { Link, useStyleConfig, useColorModeValue } from '@chakra-ui/react';
import { AuthorAvatar } from 'components/author-avatar';
import { ReactElement } from 'react';

function HeroContent(): ReactElement {
    const styles = useStyleConfig('Button');
    const buttonStyles = {
        ...styles,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '180',
        height: '12',
        background: useColorModeValue('blue.600', 'blue.200'),
        color: useColorModeValue('white', 'gray.800')
    };
    return (
        // Till 960px -> 70vh is maintained,  after that 60vh is maintained
        <div className="flex h-[70vh] flex-col items-center justify-evenly lg:h-[60vh] lg:flex-row">
            <div
                className="block lg:hidden"
                // css={css`
                //     @media (orientation: landscape) {
                //         width: 100px !important;
                //         height: 100px !important;
                //     }
                // `}
            >
                <AuthorAvatar size={180} />
            </div>
            <div className="flex h-[260px]  max-w-[850px] flex-col items-center justify-between lg:items-start">
                <h1 className="max-w-[23rem] text-center text-3xl font-bold md:max-w-[30rem] md:text-[30px] lg:text-left lg:text-[35px]">
                    Hi, I&apos;m Bharathi Kannan, Fullstack Web Developer
                </h1>
                <p className="text-center text-sm md:text-lg lg:text-left lg:text-lg">
                    I&apos;m a Tech enthusiast, who is interested in developing <b>scalable</b> and{' '}
                    <b>accessible</b> web applications. I like to build software that are easy to
                    use and maintain.
                </p>
                {/*//@ts-ignore: Here we are showing Link as a Button*/}
                <Link
                    {...buttonStyles}
                    _hover={{
                        background: useColorModeValue('blue.800', 'blue.300')
                    }}
                    _focus={{
                        background: useColorModeValue('blue.600', 'blue.300'),
                        outline: '2px dashed teal'
                    }}
                    href="/assets/resume/Bharathi Kannan Full Stack Resume.pdf"
                    download>
                    Download Resume
                </Link>
            </div>
            <div className="hidden lg:block">
                <AuthorAvatar size={500} />
            </div>
        </div>
    );
}

export { HeroContent };
