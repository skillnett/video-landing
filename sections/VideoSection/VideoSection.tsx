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
                    Tired of being photobombed? Thinking about getting rid of
                    some imperfections in the background of the photo but don’t
                    know how? Need to erase unwanted objects from your pictures
                    to get them just right? All these annoying things shouldn’t
                    be a problem anymore with our AI-driven photo editor.
                    RetouchAI is that magic button that will help you easily
                    transform poorly taken photos into the ones you actually
                    deserve.
                </BodyTextLg>

                <ButtonWrapper>
                    <DownloadButton />
                </ButtonWrapper>

                <ColorShapeComponent />
            </VideoSectionTextBlock>

            <PlayerSectionWrapper>
                <Player />
                <BodyTextLg className='video-mobile-description'>
                    Tired of being photobombed? Thinking about getting rid of
                    some imperfections in the background of the photo but don’t
                    know how? Need to erase unwanted objects from your pictures
                    to get them just right? All these annoying things shouldn’t
                    be a problem anymore with our AI-driven photo editor.
                    RetouchAI is that magic button that will help you easily
                    transform poorly taken photos into the ones you actually
                    deserve.
                </BodyTextLg>

                <ColorShapeComponent className='video-section' />
            </PlayerSectionWrapper>
        </VideoSectionWrapper>
    );
};
