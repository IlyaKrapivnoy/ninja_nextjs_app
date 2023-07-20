import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

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

useAnimatedLetter.propTypes = {
    animationClass: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired,
    cursor: PropTypes.string.isRequired
};

export default useAnimatedLetter;
