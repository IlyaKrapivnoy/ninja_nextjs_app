import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return <footer>&copy; Copyright {currentYear} Ilya Krapivnoy</footer>;
};

export default Footer;
