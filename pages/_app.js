import '../styles/globals.scss';
import Layout from '../components/main/Layout/Layout';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
