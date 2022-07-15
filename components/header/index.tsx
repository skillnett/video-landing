import { AppLogo } from 'assets/icons';
import { Button } from 'components/button';
import React from 'react';
import { StyledHeader } from './styles';

export const Header = () => {
    return (
        <StyledHeader>
            <AppLogo />

            <Button title='Contact us' href='mailto:test@email.com' />
        </StyledHeader>
    );
};
