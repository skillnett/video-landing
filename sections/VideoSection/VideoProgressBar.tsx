import React, { memo } from 'react';
import { ProgressBar } from './styles';

const isWhatPercentOf = (numA: number, numB: number) => (numA / numB) * 100;

const VideoProgressBar = memo(({ progress }: any) => {
    return <ProgressBar $width={progress} />;
});

export default VideoProgressBar;
