import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

const NonFount = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <div className="text-center">
            <Typography variant="h3" className="font-bold" gutterBottom>
                Oops<span className="animate-ping">...</span>
            </Typography>
            <Typography variant="subtitle1">
                That page cannot be found
            </Typography>
            <Typography variant="subtitle1">
                Go back to the{' '}
                <Link
                    href="/"
                    className="text-sky-600 underline underline-offset-2 "
                >
                    Homepage
                </Link>
            </Typography>
        </div>
    );
};
export default NonFount;
