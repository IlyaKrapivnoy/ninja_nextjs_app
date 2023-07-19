import '../styles/globals.scss';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import Layout from '../components/main/Layout/Layout';
import 'normalize.css';
import theme from '../theme';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
