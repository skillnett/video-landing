import { DownloadButton } from 'components/downloadButton';
import { ButtonWrapper } from 'components/downloadButton/styles';
import { BodyTextLg, Heading1 } from 'components/shared/styles';
import React from 'react';
import {
    HeadingWrapper,
    SubheadingWrapper,
    VideoSectionTextBlock,
    VideoSectionWrapper,
    PlayerSectionWrapper,
} from './styles';
import { ColorShapeComponent } from 'components/floatedShapes/ColorShape';
import Player from './Player';

export const VideoSection = () => {
    return (
        <VideoSectionWrapper>
            <VideoSectionTextBlock>
                <HeadingWrapper>
                    <Heading1 className='text-gradient'>
                        Remove objects
                    </Heading1>
                </HeadingWrapper>
                <SubheadingWrapper>
                    <Heading1>easily</Heading1>
                </SubheadingWrapper>

                <BodyTextLg className='video-desktop-description'>
                    Our algorithm helps you to automatically detect objects for
                    removal.
                </BodyTextLg>

                <ButtonWrapper>
                    <DownloadButton />
                </ButtonWrapper>

                <ColorShapeComponent />
            </VideoSectionTextBlock>

            <PlayerSectionWrapper>
                <Player />
                <BodyTextLg className='video-mobile-description'>
                    Our algorithm helps you to automatically detect objects for
                    removal.
                </BodyTextLg>

                <ColorShapeComponent className='video-section' />
            </PlayerSectionWrapper>
        </VideoSectionWrapper>
    );
};
