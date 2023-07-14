import React from 'react';
import { useRouter } from 'next/router';

const Details = ({ ninja }) => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <>
            <button onClick={handleGoBack}>Back</button>
            <h1>{ninja.name}</h1>
            <p>Email: {ninja.email}</p>
            <p>Street: {ninja.address.street}</p>
            <p>Suite: {ninja.address.suite}</p>
            <p>City: {ninja.address.city}</p>
            <p>Zipcode: {ninja.address.zipcode}</p>
        </>
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
