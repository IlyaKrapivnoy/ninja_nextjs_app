import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            &copy; Copyright {currentYear} Ilya Krapivnoy
        </footer>
    );
};

export default Footer;
