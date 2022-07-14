import {
    AppLogo,
    AppStoreLinkIco,
    InstagramIco,
    TwitterIco,
} from 'assets/icons';
import { Container } from 'components/container';
import { DownloadButton } from 'components/downloadButton';
import { BodyTextSm, Heading4 } from 'components/shared/styles';
import React from 'react';
import {
    DownloadButtonWrapper,
    FooterLinks,
    FooterWrapper,
    LogoWrapper,
    SocialLink,
    SocialLinks,
} from './styles';

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <LogoWrapper>
                    <AppLogo />
                </LogoWrapper>

                <DownloadButtonWrapper>
                    <Heading4 style={{ marginBottom: 20 }}>
                        Start editing right now
                    </Heading4>
                    <DownloadButton />
                </DownloadButtonWrapper>

                <SocialLinks>
                    <SocialLink href='#'>
                        <InstagramIco />
                    </SocialLink>
                    <SocialLink href='#'>
                        <TwitterIco />
                    </SocialLink>
                    <SocialLink href='#'>
                        <AppStoreLinkIco />
                    </SocialLink>
                </SocialLinks>

                <FooterLinks>
                    <BodyTextSm>Terms & conditions</BodyTextSm>
                    <BodyTextSm>Privacy policy</BodyTextSm>
                </FooterLinks>
            </Container>
        </FooterWrapper>
    );
};
