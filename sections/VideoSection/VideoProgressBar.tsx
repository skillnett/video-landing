import React, { memo } from 'react';
import { useTheme } from 'styled-components';

const VideoProgressBar = memo(({ progress }: any) => {
    const theme: any = useTheme();

    return (
        <div
            style={{
                transition: '1s linear all',
                position: 'absolute',
                height: 4,
                width: `${progress}%`,
                backgroundImage: `linear-gradient(
          135deg,
          ${theme.colors.gradientPrimary} 0%,
          ${theme.colors.gradientSecondary} 100%
      )`,
                zIndex: 1,
                bottom: 6,
                borderEndStartRadius: 10,
            }}
        />
    );
});

export default VideoProgressBar;
