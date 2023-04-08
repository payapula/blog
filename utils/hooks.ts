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

        // If addListener is supported, use it, else fallback
        // Ref: https://github.com/chakra-ui/chakra-ui/pull/6167/files
        // eslint-disable-next-line deprecation/deprecation
        if (typeof media.addListener === 'function') media.addListener(updateTarget);
        else media.addEventListener('change', updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => {
            // If removeListener is supported use it, else fallback
            // eslint-disable-next-line deprecation/deprecation
            if (typeof media.removeListener === 'function') media.removeListener(updateTarget);
            else media.removeEventListener('change', updateTarget);
        };
    }, []);

    return targetReached;
};

// Scroll Position - https://gist.github.com/whoisryosuke/72d9979a44e01e95400760d98ca519e8
// Ref = https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

const isBrowser = typeof window !== `undefined`;

interface getScrollPositionProp {
    element?: React.MutableRefObject<HTMLElement>;
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
    deps?: Array<unknown>,
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
    }, [effect, element, useWindow, wait, deps]);
};

export { useMediaQuery, useScrollPosition };
