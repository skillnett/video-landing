import { CheckMarkIco } from 'assets/icons';
import { BackgroundShapeMd } from 'components/floatedShapes/BackgroundShapeMd';
import { ColorShapeComponent } from 'components/floatedShapes/ColorShape';
import {
    BodyTextNormal,
    Heading2,
    Heading3,
    Heading4,
} from 'components/shared/styles';
import Image from 'next/image';
import React from 'react';
import {
    TextWrapper,
    TrialSectionWrapper,
    ListItem,
    DescriptionWrapper,
} from './styles';

export const TrialSection = () => {
    return (
        <TrialSectionWrapper>
            <div style={{ position: 'relative', flex: 1.1 }}>
                <Image
                    layout='responsive'
                    width={588}
                    height={581}
                    src='/trial-content.png'
                    alt='trial'
                />

                <ColorShapeComponent className='trial' />
                <BackgroundShapeMd />
            </div>

            <TextWrapper>
                <Heading4 className='text-gradient subtitle'>Trial</Heading4>

                <Heading2>Try RetouchAI for free right now</Heading2>

                <DescriptionWrapper>
                    <BodyTextNormal>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                    </BodyTextNormal>
                </DescriptionWrapper>

                <ListItem>
                    <CheckMarkIco />
                    <Heading3>AI-Driven</Heading3>
                </ListItem>
                <ListItem>
                    <CheckMarkIco />
                    <Heading3>7 Powerfull tools</Heading3>
                </ListItem>
                <ListItem>
                    <CheckMarkIco />
                    <Heading3>Unlimited possibilities</Heading3>
                </ListItem>
            </TextWrapper>
        </TrialSectionWrapper>
    );
};
