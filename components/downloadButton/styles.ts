import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const StyledDownloadButton = styled.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 13px 40px;
    border-radius: 20px;
    transition: 0.25s ease all;
    background-color: ${({ theme }: any) => theme.colors.dark};
    background-image: ${(props: any) =>
        props.disabled
            ? 'none'
            : `linear-gradient(
        135deg,
        ${props.theme.colors.gradientPrimary} 0%,
        ${props.theme.colors.gradientSecondary} 100%
    )`};
    width: 100%;
    justify-content: center;

    &:hover {
        background-image: ${(props: any) =>
            props.disabled
                ? 'none'
                : `linear-gradient(
                      147deg,
                      ${props.theme.colors.gradientPrimary} -13.33%,
                      ${props.theme.colors.gradientSecondary} 46.64%
                  )`};
    }

    &:focus {
        border: 3px solid #404040;
    }

    .title {
        margin-top: 5px;
    }

    ${respondTo.md`
      width: initial;
    `}
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 12px;
`;

export const ButtonWrapper = styled.div`
    margin-top: 60px;
    display: none;

    ${respondTo.md`
      display: block;
    `}
`;
