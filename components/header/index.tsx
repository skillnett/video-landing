import { Button } from 'components/button';
import Image from 'next/image';
import React from 'react';
import { StyledHeader, LogoWrapper } from './styles';

export const Header = () => {
    return (
        <StyledHeader>
            <LogoWrapper>
                <Image src='/logo.png' layout='fill' alt='logo' />
            </LogoWrapper>

            <Button title='Contact us' href='mailto:test@email.com' />
        </StyledHeader>
    );
};
