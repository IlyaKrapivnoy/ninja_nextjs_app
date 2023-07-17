import React from 'react';
import { useRouter } from 'next/router';
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
    const router = useRouter();

    const handleNavigation = (id) => {
        router.push(`/ninjas/${id}`);
    };
    return (
        <>
            <CustomHead
                title={NINJAS_CUSTOM_HEAD.title}
                description={NINJAS_CUSTOM_HEAD.description}
            />

            <h1 className="title">Total Ninjas</h1>
            <ul>
                {ninjas.map((ninja) => (
                    <li
                        key={ninja.id}
                        className={styles.single}
                        onClick={() => handleNavigation(ninja.id)}
                    >
                        <h3 className={styles.ninjaName}>
                            #{ninja.id}. {ninja.name}
                        </h3>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Index;
