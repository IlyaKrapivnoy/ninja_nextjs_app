import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar role="navigation" aria-label="Main Navigation" />
            <main role="main" className={styles.main}>
                {children}
            </main>
            <Footer role="contentinfo" aria-label="Footer" />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
