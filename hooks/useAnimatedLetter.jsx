import React, { useState } from 'react';

const useAnimatedLetter = (animationClass, letter) => {
    const [isActive, setIsActive] = useState(false);

    const handleLetterClick = () => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, 3000);
    };

    return {
        isActive,
        handleLetterClick,
        classNames: `cursor-pointer ${isActive ? `${animationClass}` : ''}`,
        letter
    };
};

export default useAnimatedLetter;
