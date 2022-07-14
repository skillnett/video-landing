import { ContactIco } from 'assets/icons';
import { Colors } from 'constants/colors';
import React from 'react';
import { StyledButton } from './styles';

export const Button = ({ title, disabled, handleClick }) => {
    return (
        <StyledButton onClick={handleClick} disabled={disabled} type='button'>
            <span>{title}</span>
            <ContactIco color={disabled ? Colors.darkGrey : Colors.white} />
        </StyledButton>
    );
};
