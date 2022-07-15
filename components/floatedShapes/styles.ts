import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';

export const ColorShapeWrapper = styled.div`
    position: absolute;
    top: -30px;
    right: 25%;

    ${respondTo.md`
      top: -80px;
      right: -120px;
    `}

    ${respondTo.lg`
      right: -50px;
    `}

    ${respondTo.xl`
      right: 50px;
    `}

    &.video-section {
        display: none;

        ${respondTo.md`
          display: block;
          top: initial;
          bottom: 200px;
          right: -80px;
        `}
        ${respondTo.lg`
          top: initial;
          bottom: 15px;
          right: -80px;
        `}
        ${respondTo.xl`
          top: initial;
          bottom: -80px;
          right: -80px;
        `}
    }

    &.feedback {
        top: initial;
        left: initial;
        bottom: -15px;
        right: 5%;

        ${respondTo.md`
          right: initial;
          bottom: -20px;
          left: 25%;
        `}
        ${respondTo.lg`
          top: initial;
          left: 30%;
        `}
        ${respondTo.xl`
          left: 480px;
        `}
    }

    &.trial {
        top: 160px;
        left: 34px;
        bottom: -15px;

        ${respondTo.md`
          top: initial;
          left: initial;
          right: 20px;
          bottom: 300px;
        `}
        ${respondTo.lg`
          bottom: 120px;
        `}
        ${respondTo.xl`
          bottom: -70px;
        `}
    }
`;

export const ColorShape = styled.div`
    position: relative;
    width: 80px;
    height: 80px;

    ${respondTo.md`
      width: 150px;
      height: 150px;
    `}

    &.video-section {
        ${respondTo.md`
          width: 115px;
          height: 115px;
        `}
    }

    &.feedback {
        ${respondTo.md`
          width: 100px;
          height: 100px;
        `}
    }

    &.trial {
        width: 70px;
        height: 70px;

        ${respondTo.md`
          width: 100px;
          height: 100px;
        `}
    }
`;

export const BackgroundShapeWrapper = styled.div`
    position: absolute;
    top: 550px;
    right: initial;
    left: -400px;
    z-index: -1;
    transform: rotate(180deg);

    ${respondTo.md`
      transform: rotate(0deg);
      top: 500px;
      left: initial;
      right: 0;
    `}
`;

export const BackgroundShape = styled.div`
    position: relative;
    width: 633px;
    height: 639px;

    ${respondTo.md`
      width: 641px;
      height: 729px;
    `}
    ${respondTo.lg`
      width: 841px;
      height: 929px;
    `}
`;

export const BackgroundShapeMdWrapper = styled.div`
    position: absolute;
    top: 70px;
    right: -250px;
    left: initial;
    z-index: -1;
    transform: rotate(180deg);

    ${respondTo.md`
      transform: rotate(0deg);
      top: -250px;
      right: initial;
      left: -250px;
    `}
`;

export const BackgroundMdShape = styled.div`
    position: relative;
    width: 400px;
    height: 600px;

    ${respondTo.md`
      width: 500px;
      height: 746px;
    `}
`;
