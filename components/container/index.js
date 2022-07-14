import React from 'react';
import styledComponents from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styledComponents.div`
    margin: auto;
    padding: 0 20px;

    ${respondTo.md`
      max-width: 724px;
    `}

    ${respondTo.lg`
      max-width: 930px;
    `}

  ${respondTo.xl`
      max-width: 1200px;
    `}
`;
