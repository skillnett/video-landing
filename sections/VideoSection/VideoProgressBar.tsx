import React, { memo } from 'react';
import { ProgressBar } from './styles';

const VideoProgressBar = memo(({ progress }: any) => {
    return <ProgressBar $width={progress} />;
});

export default VideoProgressBar;
