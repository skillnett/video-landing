import { Colors } from 'constants/colors';
import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const StyledDownloadButton = styled.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 13px 40px;
    border-radius: 20px;
    transition: 0.25s ease all;
    background-color: ${Colors.dark};
    background-image: ${props =>
        props.disabled
            ? 'none'
            : `linear-gradient(
        135deg,
        ${Colors.gradientPrimary} 0%,
        ${Colors.gradientSecondary} 100%
    )`};

    &:hover {
        background-image: ${props =>
            props.disabled
                ? 'none'
                : `linear-gradient(
                      147deg,
                      ${Colors.gradientPrimary} -13.33%,
                      ${Colors.gradientSecondary} 46.64%
                  )`};
    }

    &:focus {
        border: 3px solid #404040;
    }

    .title {
        margin-top: 5px;
    }
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
