import { ContactIco } from 'assets/icons';
import React from 'react';
import { useTheme } from 'styled-components';
import { StyledButton } from './styles';

export const Button = ({ title, disabled, handleClick }: any) => {
    const theme: any = useTheme();

    return (
        <StyledButton onClick={handleClick} disabled={disabled} type='button'>
            <span>{title}</span>
            <ContactIco
                color={disabled ? theme.colors.darkGrey : theme.colors.white}
            />
        </StyledButton>
    );
};
