import { AppStoreLinkIco, InstagramIco, TwitterIco } from 'assets/icons';
import { Container } from 'components/container';
import { DownloadButton } from 'components/downloadButton';
import { BodyTextSm, Heading4 } from 'components/shared/styles';
import Image from 'next/image';
import Link from 'next/link';
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
                    <Image src='/logo.png' width={155} height={26} alt='logo' />
                </LogoWrapper>

                <DownloadButtonWrapper>
                    <Heading4 style={{ marginBottom: 10 }}>
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
                    <Link href='/terms-of-service'>
                        <a>
                            <BodyTextSm>Terms & conditions</BodyTextSm>
                        </a>
                    </Link>
                    <Link href='/privacy-policy'>
                        <a>
                            <BodyTextSm>Privacy policy</BodyTextSm>
                        </a>
                    </Link>
                </FooterLinks>
            </Container>
        </FooterWrapper>
    );
};
