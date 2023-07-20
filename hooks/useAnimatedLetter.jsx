import React, { useState } from 'react';
import cn from 'classnames';

const useAnimatedLetter = (animationClass, letter, cursor) => {
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
        classNames: cn(`${cursor}`, { [animationClass]: isActive }),
        letter
    };
};

export default useAnimatedLetter;
