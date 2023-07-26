import React from 'react';
import cn from 'classnames';
import styles from './Spinner.module.scss';

const Spinner = ({ danger, small, circle }) => {
    const bigSize = 'h-16 w-16';
    const smallSize = 'h-8 w-8';
    const dangerColor = `bg-red-600`;
    const calmColor = `bg-cyan-600`;

    const sizeClassName = small ? smallSize : bigSize;
    const colorClassName = danger ? dangerColor : calmColor;
    const shapeClassName = circle ? 'rounded-full' : '';

    return (
        <div
            className={cn(
                styles.rotatingPlane,
                colorClassName,
                sizeClassName,
                shapeClassName
            )}
        ></div>
    );
};

export default Spinner;
