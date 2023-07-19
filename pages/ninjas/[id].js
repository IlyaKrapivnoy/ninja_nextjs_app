import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/web-pages/Ninjas/Ninjas.module.scss';

const Details = ({ ninja }) => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className={styles.ninjaCard}>
            <div className={styles.headerCard}>
                <Button
                    onClick={handleGoBack}
                    variant="outlined"
                    sx={{
                        width: '30px',
                        height: '30px',
                        minWidth: '30px',
                        borderRadius: '10px'
                    }}
                >
                    <ArrowBackIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                            minWidth: '20px'
                        }}
                    />
                </Button>

                <span className={styles.ninjaName}>
                    #{ninja.id}. {ninja.name}
                </span>
            </div>
            <ul className={styles.listItems}>
                <li>
                    <span>Email:</span> {ninja.email}
                </li>
                <li>
                    <span>Street:</span> {ninja.address.street}
                </li>
                <li>
                    <span>Suite:</span> {ninja.address.suite}
                </li>
                <li>
                    <span>City:</span> {ninja.address.city}
                </li>
                <li>
                    <span>Zipcode:</span> {ninja.address.zipcode}
                </li>
            </ul>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map((ninja) => ({
        params: { id: ninja.id.toString() }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    };
}

export default Details;
