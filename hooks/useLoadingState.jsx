import React, { useState } from 'react';

const useLoadingState = () => {
    const [isLoading, setLoading] = useState(false);

    const handleButtonClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 8000);
    };

    return { isLoading, handleButtonClick };
};

export default useLoadingState;
