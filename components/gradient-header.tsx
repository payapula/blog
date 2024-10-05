import * as React from 'react';

interface GradientHeaderProps {
    children: React.ReactNode;
    /**
     * Accepts all HTML attributes
     */
    overrides?: React.HTMLAttributes<HTMLHeadingElement>;
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

export function GradientHeader({ children, overrides = {} }: GradientHeaderProps) {
    return (
        <h1
            className="postQuizHeader mt-7 text-center text-4xl font-bold md:text-6xl"
            {...overrides}>
            {children}
        </h1>
    );
}
