import React from 'react';
import Link from 'next/link';
import styles from '../../styles/ninjas.module.scss';
import CustomHead from '../../components/base/CustomHead/CustomHead';
import { NINJAS_CUSTOM_HEAD } from '../../constants/customHead';

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
            <CustomHead
                title={NINJAS_CUSTOM_HEAD.title}
                description={NINJAS_CUSTOM_HEAD.description}
            />

            <h1 className={styles.title}>Total Ninjas</h1>
            {ninjas.map((ninja) => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </>
    );
};

export default Index;
