import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 14px;

    ${respondTo.md`
      padding-bottom: 20px;
    `}
`;
