import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const StyledButton = styled.button`
    background-color: ${({ theme }: any) => theme.colors.dark};
    padding: 10px 10px 8px 8px;
    transition: 0.2s ease all;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100%;
    border: 4px solid transparent;

    span {
        display: none;
        color: ${({ theme }: any) => theme.colors.white};
        font-size: 16px;
        margin-right: 10px;
    }

    ${respondTo.md`
      border-radius: 20px;
      padding: 20px 35px 20px 40px;

      span {
        display: block;
      }
    `}

    &:focus {
        border: ${({ theme }: any) => `4px solid ${theme.colors.darkGrey}`};
    }

    &:disabled {
        border: ${({ theme }: any) => `1px solid ${theme.colors.darkGrey}`};
        background-color: ${({ theme }: any) => theme.colors.secondaryDark};

        span {
            color: ${({ theme }: any) => theme.colors.darkGrey};
        }
    }

    &:hover: {
        background-color: ${({ theme }: any) => theme.colors.darkGrey};
    }
`;
