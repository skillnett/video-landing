import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import '../styles/home.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
