import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../components/web-pages/PageNotFound/404.module.scss';

const NonFount = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);
    return (
        <div className={styles.container}>
            <h1>Oops...</h1>
            <h2>That page cannot be found</h2>
            <p>
                Go back to the <Link href="/">Homepage</Link>
            </p>
        </div>
    );
};
export default NonFount;
