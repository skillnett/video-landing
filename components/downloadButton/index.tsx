import { AppleIco, AppStoreIco, DownloadIco } from 'assets/icons';
import { logEvent } from 'firebase/analytics';
import React from 'react';
import { useTheme } from 'styled-components';
import { analytics } from 'utils/firebase';
import { StyledDownloadButton, TitleWrapper } from './styles';

export const DownloadButton = ({ disabled }: any) => {
    const theme: any = useTheme();

    return (
        <StyledDownloadButton
            onClick={() => {
                if (analytics) {
                    logEvent(analytics, 'web_remove_objects_app_download');
                }
                window
                    ?.open('https://apps.apple.com/app/id1488926745', '_blank')
                    ?.focus();
            }}
            disabled={disabled}
            type='button'
        >
            <AppleIco
                color={disabled ? theme.colors.darkGrey : theme.colors.white}
            />

            <TitleWrapper>
                <DownloadIco
                    color={
                        disabled ? theme.colors.darkGrey : theme.colors.white
                    }
                />

                <AppStoreIco
                    color={
                        disabled ? theme.colors.darkGrey : theme.colors.white
                    }
                    className='title'
                />
            </TitleWrapper>
        </StyledDownloadButton>
    );
};
