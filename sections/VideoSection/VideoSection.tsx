import { DownloadButton } from 'components/downloadButton';
import { ButtonWrapper } from 'components/downloadButton/styles';
import { BodyTextLg, Heading1 } from 'components/shared/styles';
import React, { useState } from 'react';
import {
    HeadingWrapper,
    SubheadingWrapper,
    VideoSectionTextBlock,
    VideoSectionWrapper,
    PlayerWrapper,
    PlayerSectionWrapper,
} from './styles';
import dynamic from 'next/dynamic';
import { ColorShapeComponent } from 'components/floatedShapes/ColorShape';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const VideoSection = () => {
    const [isPlaying, setPlaying] = useState(false);

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
                <PlayerWrapper>
                    <ReactPlayer
                        loop
                        muted
                        playsinline
                        playing={isPlaying}
                        onReady={() => setPlaying(true)}
                        url='video/palm.mp4'
                        width='100%'
                        height='100%'
                        controls={false}
                    />
                </PlayerWrapper>
                <BodyTextLg className='video-mobile-description'>
                    Our algorithm helps you to automatically detect objects for
                    removal.
                </BodyTextLg>

                <ColorShapeComponent className='video-section' />
            </PlayerSectionWrapper>
        </VideoSectionWrapper>
    );
};
