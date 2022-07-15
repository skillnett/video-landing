import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const FooterWrapper = styled.div`
    background: ${({ theme }: any) => theme.colors.dark};
    padding: 20px 0;
    border-radius: 24px 24px 0px 0px;
    position: fixed;
    bottom: 0;
    width: 100%;

    ${respondTo.md`
      border-radius: 0;
      padding: 80px 0;
      position: initial;
    `}
`;

export const LogoWrapper = styled.div`
    display: none;
    text-align: center;

    ${respondTo.md`
      margin-bottom: 60px;
      display: block;
    `}
`;

export const DownloadButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterLinks = styled.div`
    display: none;

    ${respondTo.md`
      display: flex;
      justify-content: space-around;
    `}
`;

export const SocialLinks = styled.div`
    display: none;

    ${respondTo.md`
      display: flex;
      justify-content: center;
      margin: 63px 0;
    `}
`;

export const SocialLink = styled.a`
    text-decoration: none;
    margin: 0 20px;
    cursor: pointer;
`;
