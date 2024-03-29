import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const VideoSectionWrapper = styled.div`
    padding: 10px 0 50px;
    display: flex;
    flex-direction: column;

    .video-desktop-description {
        margin-top: 30px;
        display: none;
    }
    .video-mobile-description {
        margin-top: 30px;
        display: block;
    }

    ${respondTo.md`
      padding: 200px 0;
      flex-direction: row;
      justify-content: space-between;

      .video-desktop-description {
        display: block;
      }
      .video-mobile-description {
        display: none;
      }
    `}
`;

export const VideoSectionTextBlock = styled.div`
    max-width: 588px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
    margin-right: 0;
    position: relative;

    ${respondTo.md`
      flex: 1.1;
      display: block;
      margin-bottom: 0;
      margin-right: 126px;
    `}
`;

export const HeadingWrapper = styled.div`
    max-width: 170px;

    ${respondTo.md`
        max-width: 100%;
    `}
`;

export const SubheadingWrapper = styled.div`
    margin-left: -36px;

    ${respondTo.md`
      margin-left: 0;
    `}
`;

export const PlayerWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

export const PlayerSectionWrapper = styled.div`
    position: relative;
    ${respondTo.md`
      flex: 0.9;
    `}
`;

export const ProgressBar = styled.div<any>`
    transition: 1s linear all;
    position: absolute;
    height: 4px;
    width: ${({ $width }) => `${$width}%`};
    background-image: ${(props: any) =>
        `linear-gradient(
        135deg,
        ${props.theme.colors.gradientPrimary} 0%,
        ${props.theme.colors.gradientSecondary} 100%
    )`};
    z-index: 1;
    bottom: 6px;
    border-end-start-radius: 10px;
`;
