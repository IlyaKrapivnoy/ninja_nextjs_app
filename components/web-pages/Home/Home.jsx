import React from 'react';
import Link from 'next/link';
import styles from './Home.module.scss';
import CustomHead from '../../base/CustomHead/CustomHead';

function Home() {
    return (
        <>
            <CustomHead
                title="Ninja List | Home"
                description="There is a unique hub for ninhas. Find out our advantages and make your life even more heroic"
            />
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque delectus deserunt distinctio dolore, facere illum
                    maxime molestias rerum tempora vitae? A alias cumque debitis
                    eaque itaque labore, repudiandae totam vero!
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque delectus deserunt distinctio dolore, facere illum
                    maxime molestias rerum tempora vitae? A alias cumque debitis
                    eaque itaque labore, repudiandae totam vero!
                </p>
                <Link href="/ninjas">
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}
export default Home;
