const getBasePath = (url: string): string =>
    typeof window !== 'undefined'
        ? `${window.location.protocol}//${window.location.host}${url}`
        : url;

const getRandom5digit = (): number => Math.floor(Math.random() * 90000) + 10000;

export { getBasePath, getRandom5digit };
