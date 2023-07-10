import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
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
