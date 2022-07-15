import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const TrialSectionWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 200px;

    ${respondTo.md`
      display: flex;
      padding-top: 150px;
  `}

    .subtitle {
        margin-bottom: 20px;
    }
`;

export const TextWrapper = styled.div`
    flex: 0.9;
    margin-left: 0;
    margin-top: 20px;

    ${respondTo.md`
      margin-left: 126px;
      margin-top: 0;
    `}
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg {
        margin-right: 10px;
    }
`;

export const DescriptionWrapper = styled.div`
    margin: 20px 0;

    ${respondTo.md`
      margin: 40px 0;
    `}
`;

export const TrialWrapper = styled.div`
    overflow: hidden;

    ${respondTo.md`
      overflow: initial;
    `}
`;
