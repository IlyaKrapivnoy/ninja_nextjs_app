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
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about" className={styles.navLink}>
                        About
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/ninjas" className={styles.navLink}>
                        Ninja List
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
