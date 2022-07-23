import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const StyledButton = styled.a<any>`
    background-color: ${({ theme }: any) => theme.colors.dark};
    padding: 6px 6px 4px 4px;
    transition: 0.2s ease all;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100%;
    border: 4px solid transparent;
    text-decoration: none;

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

    &:hover: {
        background-color: ${({ theme }: any) => theme.colors.darkGrey};
    }
`;
