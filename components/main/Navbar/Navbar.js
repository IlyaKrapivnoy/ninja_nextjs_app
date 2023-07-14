import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import Logo from '../../../public/logo.png';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <Image src={Logo} width="100" alt="logo" />
                </Link>
            </div>
            <div className={styles.navItems}>
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/ninjas">Ninja List</Link>
            </div>
        </nav>
    );
};

export default Navbar;
