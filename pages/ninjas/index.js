import React from 'react';
import Head from 'next/head';
import styles from '../../styles/ninjas.module.scss';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    };
};

const Index = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Total Ninjas</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Total Ninjas</h1>
                {ninjas.map((ninja) => (
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Index;
