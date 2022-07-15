import Image from 'next/image';
import React from 'react';
import { ColorShapeWrapper, ColorShape } from './styles';

export const ColorShapeComponent = ({ className }: any) => {
    return (
        <ColorShapeWrapper className={className}>
            <ColorShape className={className}>
                <Image
                    src='/shape-color-circle.png'
                    layout='fill'
                    alt='color shape'
                />
            </ColorShape>
        </ColorShapeWrapper>
    );
};
