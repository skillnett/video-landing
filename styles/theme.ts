import { breakpoints } from 'constants/breakpoints';

const theme: any = {
    colors: {
        dark: '#000',
        secondaryDark: '#151212',
        darkGrey: '#2A2424',
        white: '#fff',
        gradientPrimary: '#EF7F3E',
        gradientSecondary: '#EC367D',
    },
    fonts: {
        main: "'Silka', Arial, sans-serif",
    },
    breakpoints: Object.values(breakpoints),
};

export default theme;
