import Image from 'next/image';
import React from 'react';
import { BackgroundShapeWrapper, BackgroundShape } from './styles';

export const BackgroundShapeLg = () => {
    return (
        <BackgroundShapeWrapper>
            <BackgroundShape>
                <Image
                    src='/shape-big-circle.png'
                    layout='fill'
                    alt='color shape'
                />
            </BackgroundShape>
        </BackgroundShapeWrapper>
    );
};
