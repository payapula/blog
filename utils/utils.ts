const getBasePath = (url: string): string =>
    typeof window !== 'undefined'
        ? `${window.location.protocol}/${window.location.host}${url}`
        : url;

export { getBasePath };
