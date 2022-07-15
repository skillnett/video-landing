import Image from 'next/image';
import React from 'react';
import { BackgroundShapeMdWrapper, BackgroundMdShape } from './styles';

export const BackgroundShapeMd = () => {
    return (
        <BackgroundShapeMdWrapper>
            <BackgroundMdShape>
                <Image
                    src='/shape-medium-circle.png'
                    layout='fill'
                    alt='color shape'
                />
            </BackgroundMdShape>
        </BackgroundShapeMdWrapper>
    );
};
