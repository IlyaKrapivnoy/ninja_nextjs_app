import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import styles from '../../web-pages/Home/Home.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className="logo">
                <Link href="/" passHref>
                    <Image src={Logo} width="100" alt="logo" />
                </Link>
            </div>
            <div className="navItems">
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/ninjas">Ninja List</Link>
            </div>
        </nav>
    );
};

export default Navbar;
