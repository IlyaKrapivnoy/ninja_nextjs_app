import { useState, useEffect } from 'react';

const useHydratedState = () => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return isHydrated;
};

export default useHydratedState;
