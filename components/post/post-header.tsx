import { ReactElement } from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';

interface PostHeaderProps {
    title: string;
}
// https://mycolor.space/
// background-image: linear-gradient(to right, #ebe371, #fc9b42, #f74252, #c6007f, #3e02ab);
// background-image: linear-gradient(to right, #bb7028, #c63e32, #c20051, #a0007d, #3e02ab);
// background-image: linear-gradient(to right, #be9a7c, #c46d5c, #c03460, #a2007f, #3e02ab);
//background-image: linear-gradient(to right, #d26472, #c73d75, #b10a82, #8b0095, #3e02ab);

// Dark

// background-image: linear-gradient(to right, #7a592a, #8e6b27, #a17f22, #b19419, #beab09);
// background-image: linear-gradient(to left, #9e6d29, #ae812b, #bc952c, #c8ab2f, #d2c234);
//background-image: linear-gradient(to left, #62e884, #88dc67, #a4ce4f, #b9c03d, #cbb135);
// background-image: linear-gradient(to right, #c19685, #b8a178, #9eaf7b, #76bc95, #3ec4c1);
function PostHeader({ title }: PostHeaderProps): ReactElement {
    return (
        <Heading
            as="h1"
            fontSize={['4xl', null, null, '6xl']}
            fontWeight="bold"
            textAlign="center"
            bgClip="text"
            bgGradient={useColorModeValue(
                'linear(to-r,  #d26472, #c73d75, #b10a82, #8b0095, #3e02ab)',
                'linear(to-r, #c19685, #b8a178, #9eaf7b, #76bc95, #3ec4c1)'
            )}
            mt="7">
            {title}
        </Heading>
    );
}

export { PostHeader };
