import { chakra } from '@chakra-ui/react';
import Image from 'next/image';
import isValidHTMLProp from '@emotion/is-prop-valid';

const ChakraNextImage = chakra(Image, {
    shouldForwardProp: (prop) => {
        // Refer - https://chakra-ui.com/docs/features/chakra-factory#allowing-custom-props-to-be-forwarded
        // If we allow all props, borderRadius would be passed to DOM element
        // which we dont want
        const isValidProp = isValidHTMLProp(prop);
        if (isValidProp || prop === 'priority') return true;

        return false;
    }
});

export { ChakraNextImage };
