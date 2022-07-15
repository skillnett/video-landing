// @ts-nocheck
import { breakpoints } from 'constants/breakpoints';
import { css } from 'styled-components';

export const respondTo = Object.keys(breakpoints).reduce(
    (accumulator: any, label: any) => {
        accumulator[label] = (...args: any) => css`
            @media (min-width: ${breakpoints[label]}) {
                ${css(...args)};
            }
        `;
        return accumulator;
    },
    {}
);
