import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';
import styles from '../styles/home.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className="logo">
                <Link href="/">
                    <Image src={Logo} width="100%" height="100%" alt="logo" />
                </Link>
            </div>
            <div className="navItems">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/ninjas">
                    <a>Ninja List</a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
