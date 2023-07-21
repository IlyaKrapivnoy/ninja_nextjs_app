import React from 'react';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
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

            <Typography variant="h1" className="font-semibold text-4xl pb-4">
                Total Ninjas
            </Typography>
            <ul>
                {ninjas.map((ninja) => (
                    <li
                        className="bg-white block my-5 px-4 py-5 border-l-8 border-white rounded cursor-pointer transition-colors duration-300 hover:border-customIndianRed hover:bg-customSeaSalt"
                        key={ninja.id}
                        onClick={() => handleNavigation(ninja.id)}
                    >
                        <h3 className="text-base font-semibold">{`#${ninja.id}. ${ninja.name}`}</h3>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Index;
