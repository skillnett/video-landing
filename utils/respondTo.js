import { breakpoints } from 'constants/breakpoints';
import { css } from 'styled-components';

export const respondTo = Object.keys(breakpoints).reduce(
    (accumulator, label) => {
        accumulator[label] = (...args) => css`
            @media (min-width: ${breakpoints[label]}) {
                ${css(...args)};
            }
        `;
        return accumulator;
    },
    {}
);
