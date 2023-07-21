import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RefreshIcon from '@mui/icons-material/Refresh';
import cn from 'classnames';
import styles from '../../components/web-pages/Ninjas/Ninjas.module.scss';

const Details = ({ ninja }) => {
    const router = useRouter();

    const [isLoading, setLoading] = useState(false);
    const handleGoBack = () => {
        router.back();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 8000);
    };

    return (
        <div
            className={cn(
                styles.ninjaCard,
                'min-w-[300px] min-h-[220px] px-5 py-10 rounded-lg'
            )}
        >
            <div
                className={cn(styles.headerCard, 'pb-7.5 mb-7.5 max-h-[30px]')}
            >
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
                    {!isLoading ? (
                        <ArrowBackIcon
                            sx={{
                                width: '20px',
                                height: '20px',
                                minWidth: '20px'
                            }}
                        />
                    ) : (
                        <RefreshIcon
                            sx={{
                                width: '20px',
                                height: '20px',
                                minWidth: '20px'
                            }}
                            className="animate-spin"
                        />
                    )}
                </Button>

                <Typography
                    variant="h2"
                    className={cn(styles.ninjaName, 'text-[22px] font-black')}
                >
                    #{ninja.id}. {ninja.name}
                </Typography>
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

Details.propTypes = {
    ninja: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
            street: PropTypes.string.isRequired,
            suite: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zipcode: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
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
