import React from 'react';
import Link from 'next/link';
import styles from './Home.module.scss';
import CustomHead from '../../base/CustomHead/CustomHead';
import { HOME_CUSTOM_HEAD } from '../../../constants/customHead';

const Home = () => {
    return (
        <>
            <CustomHead
                title={HOME_CUSTOM_HEAD.title}
                description={HOME_CUSTOM_HEAD.description}
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
                <Link href="/ninjas" className={styles.btn}>
                    See Ninja Listing
                </Link>
            </div>
        </>
    );
};
export default Home;
