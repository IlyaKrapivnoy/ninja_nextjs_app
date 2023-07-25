import { useEffect } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from '../components/web-pages/PageNotFound/404.module.scss';

const NonFount = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 6000);
    }, [router]);

    return (
        <>
            <div className={styles.container}>
                <input type="checkbox" id={styles.switch} />
                <div className={styles.ellipse}></div>
                <div className={styles.ray}></div>
                <div className={styles.head}></div>
                <div className={styles.neck}></div>
                <div className={styles.body}>
                    <label htmlFor="switch"></label>
                </div>
            </div>
            <div className={styles.container}>
                <div className={cn(styles.msg, styles.msg1)}>404</div>
                <div className={cn(styles.msg, styles.msg2)}>
                    Page Not Found
                </div>
            </div>
        </>
    );
};
export default NonFount;
