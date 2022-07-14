import { AppleIco, AppStoreIco, DownloadIco } from 'assets/icons';
import { Colors } from 'constants/colors';
import React from 'react';
import { StyledDownloadButton, TitleWrapper } from './styles';

export const DownloadButton = ({ onClick, disabled }) => {
    return (
        <StyledDownloadButton
            onClick={onClick}
            disabled={disabled}
            type='button'
        >
            <AppleIco color={disabled ? Colors.darkGrey : Colors.white} />

            <TitleWrapper>
                <DownloadIco
                    color={disabled ? Colors.darkGrey : Colors.white}
                />

                <AppStoreIco
                    color={disabled ? Colors.darkGrey : Colors.white}
                    className='title'
                />
            </TitleWrapper>
        </StyledDownloadButton>
    );
};
