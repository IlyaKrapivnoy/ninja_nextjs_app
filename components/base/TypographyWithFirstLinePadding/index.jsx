import React from 'react';
import { Typography } from '@mui/material';
import useFirstLinePadding from '../../../hooks/useFirstLinePadding';

export const TypographyWithFirstLinePadding = ({ paddingValue, ...props }) => {
    const typographyRef = useFirstLinePadding(paddingValue);

    return (
        <Typography
            variant="body1"
            component="div"
            ref={typographyRef}
            {...props}
        />
    );
};
