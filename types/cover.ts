type Cover = {
    src: string;
    alt: string;
    author: {
        name: string;
        url: string;
    };
};

export type PlaiceHolderProps = {
    base64: string;
    img: {
        height: number;
        src: string;
        type?: string;
        width: number;
    };
};

export default Cover;
