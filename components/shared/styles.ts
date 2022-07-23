import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const Heading1 = styled.h1`
    font-weight: bold;
    font-size: 34px;
    line-height: 120%;

    ${respondTo.md`
      font-size: 94px;
      line-height: 120%;
    `}
`;

export const Heading2 = styled.h2`
    font-weight: bold;
    font-size: 34px;
    line-height: 120%;

    ${respondTo.md`
      font-size: 62px;
      line-height: 120%;
    `}
`;

export const Heading3 = styled.h3`
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.05em;
`;

export const Heading4 = styled.h4`
    font-weight: bold;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.05em;

    ${respondTo.md`
      font-size: 16px;
      line-height: 120%;
    `}
`;

export const BodyTextLg = styled.p`
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.05em;
    opacity: 0.85;
`;

export const BodyTextNormal = styled.p`
    line-height: 150%;
    letter-spacing: 0.05em;
    opacity: 0.85;
    font-size: 18px;
`;

export const BodyTextSm = styled.p`
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.05em;
    opacity: 0.85;
`;
