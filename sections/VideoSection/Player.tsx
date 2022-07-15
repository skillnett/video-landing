import React, { useState } from 'react';
import VideoProgressBar from './VideoProgressBar';
import dynamic from 'next/dynamic';
import { PlayerWrapper } from './styles';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Player = () => {
    const [isPlaying, setPlaying] = useState(false);

    const [progress, setProgress] = useState(0);

    return (
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
                onProgress={e => setProgress(e.played * 100)}
            />

            <VideoProgressBar {...{ progress }} />
        </PlayerWrapper>
    );
};

export default Player;
