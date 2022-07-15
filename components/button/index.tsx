import { ContactIco } from 'assets/icons';
import React from 'react';
import { useTheme } from 'styled-components';
import { StyledButton } from './styles';

export const Button = ({ title, disabled, href }: any) => {
    const theme: any = useTheme();

    return (
        <StyledButton href={href} $disabled={disabled}>
            <span>{title}</span>
            <ContactIco
                color={disabled ? theme.colors.darkGrey : theme.colors.white}
            />
        </StyledButton>
    );
};
