import { Colors } from 'constants/colors';
import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const StyledButton = styled.button`
    background-color: ${Colors.dark};
    padding: 10px 10px 8px 8px;
    transition: 0.2s ease all;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100%;
    border: 4px solid transparent;

    span {
        display: none;
        color: ${Colors.white};
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
        border: 4px solid ${Colors.darkGrey};
    }

    &:disabled {
        border: 1px solid ${Colors.darkGrey};
        background-color: ${Colors.secondaryDark};

        span {
            color: ${Colors.darkGrey};
        }
    }

    &:hover: {
        background-color: ${Colors.darkGrey};
    }
`;
