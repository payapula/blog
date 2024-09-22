import { AuthorAvatar } from 'components/author-avatar';
import { ReactElement } from 'react';

function HeroContent(): ReactElement {
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
                <p className="text-center text-sm sm:text-lg lg:text-left lg:text-lg">
                    I&apos;m a Tech enthusiast, who is interested in developing <b>scalable</b> and{' '}
                    <b>accessible</b> web applications. I like to build software that are easy to
                    use and maintain.
                </p>
                {/*//@ts-ignore: Here we are showing Link as a Button*/}
                <a
                    href="/assets/resume/Bharathi Kannan Full Stack Resume.pdf"
                    download
                    className={`flex h-[48px] w-[180px] items-center 
                    justify-center
                    rounded
                    bg-blue-dark
                    font-semibold
                    text-white
                    hover:bg-blue-900
                    focus:bg-blue-600
                    focus:outline-dashed
                    focus:outline-2
                    dark:bg-blue-light 
                    dark:text-black dark:hover:bg-blue-300 dark:focus:bg-blue-300
                    `}>
                    Download Resume
                </a>
            </div>
            <div className="hidden lg:block">
                <AuthorAvatar size={500} />
            </div>
        </div>
    );
}

export { HeroContent };
