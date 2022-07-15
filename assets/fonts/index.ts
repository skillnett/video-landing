// @ts-nocheck
import { css } from 'styled-components';

import SilkaSemiBoldWoff2 from './Silka-SemiBold.woff2';
import SilkaSemiBoldWoff from './Silka-SemiBold.woff';
import SilkaSemiBoldEot from './Silka-SemiBold.eot';

import SilkaRegularWoff2 from './Silka-Regular.woff2';
import SilkaRegularWoff from './Silka-Regular.woff';
import SilkaRegularEot from './Silka-Regular.eot';

const fonts = css`
    @font-face {
        font-family: 'Silka';
        src: url('${SilkaSemiBoldEot}?#iefix') format('embedded-opentype'),
            url('${SilkaSemiBoldWoff2}') format('woff2'),
            url('${SilkaSemiBoldWoff}') format('woff');
        font-weight: bold;
        font-display: swap;
    }

    @font-face {
        font-family: 'Silka';
        src: url('${SilkaRegularEot}?#iefix') format('embedded-opentype'),
            url('${SilkaRegularWoff2}') format('woff2'),
            url('${SilkaRegularWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

export default fonts;
