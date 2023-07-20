import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Typography } from '@mui/material';
import styles from './ReusableWordComponent.module.scss';

const ReusableWordComponent = ({ letters, activeIndex, onLetterClick }) => {
    return (
        <div className={cn(styles.word, 'flex justify-center pb-[40px]')}>
            {letters.map((letter, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    component="span"
                    className={cn(
                        'text-333 text-9xl font-semibold',
                        activeIndex === index ? `${styles.active}` : ''
                    )}
                    onClick={() => onLetterClick(index)}
                >
                    {letter}
                </Typography>
            ))}
        </div>
    );
};

ReusableWordComponent.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeIndex: PropTypes.number.isRequired,
    onLetterClick: PropTypes.func.isRequired
};

export default ReusableWordComponent;
