import * as React from 'react';

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const useMediaQuery = (width: number): boolean => {
    const [targetReached, setTargetReached] = React.useState(false);

    const updateTarget = React.useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useIsomorphicLayoutEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};

// Scroll Position - https://gist.github.com/whoisryosuke/72d9979a44e01e95400760d98ca519e8
// Ref = https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

const isBrowser = typeof window !== `undefined`;

interface getScrollPositionProp {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    element?: React.MutableRefObject<any>;
    useWindow?: boolean;
}

function getScrollPosition({ element, useWindow }: getScrollPositionProp) {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = element?.current ? element.current : document.body;

    const position = target.getBoundingClientRect();

    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top };
}

type PositionObject = {
    prevPos: {
        x: number;
        y: number;
    };
    currPos: {
        x: number;
        y: number;
    };
};

type useScrollPositionFunction = (
    effect: ({ prevPos, currPos }: PositionObject) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deps?: Array<any>,
    element?: React.MutableRefObject<HTMLDivElement>,
    useWindow?: boolean,
    wait?: number
) => void;

const useScrollPosition: useScrollPositionFunction = (
    effect,
    deps,
    element = null,
    useWindow = false,
    wait = null
): void => {
    const position = React.useRef(getScrollPosition({ useWindow }));

    useIsomorphicLayoutEffect(() => {
        let throttleTimeout = null;

        const callBack = () => {
            const currPos = getScrollPosition({ element, useWindow });
            effect({ prevPos: position.current, currPos });
            position.current = currPos;
            throttleTimeout = null;
        };

        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait);
                }
            } else {
                callBack();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, [effect, element, useWindow, wait, deps]);
};

export { useMediaQuery, useScrollPosition };
