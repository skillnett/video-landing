import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;

    ${respondTo.md`
      padding-top: 30px;
      padding-bottom: 20px;
    `}
`;

export const LogoWrapper = styled.div`
    position: relative;
    width: 120px;
    height: 20px;

    ${respondTo.md`
      width: 155px;
      height: 26px;
    `}
`;
