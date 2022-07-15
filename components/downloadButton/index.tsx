import { AppleIco, AppStoreIco, DownloadIco } from 'assets/icons';
import React from 'react';
import { useTheme } from 'styled-components';
import { StyledDownloadButton, TitleWrapper } from './styles';

export const DownloadButton = ({ onClick, disabled }: any) => {
    const theme: any = useTheme();

    return (
        <StyledDownloadButton
            onClick={onClick}
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
