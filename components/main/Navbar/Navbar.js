import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './Navbar.module.scss';
import Logo from '../../../public/logo.png';

const Navbar = () => {
    const router = useRouter();

    const navigationLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/ninjas', label: 'Ninja List' }
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <Image src={Logo} width="100" alt="logo" />
                </Link>
            </div>

            <ul className={styles.navItems}>
                {navigationLinks.map((link) => (
                    <li key={link.path} className={styles.navItem}>
                        <Link
                            href={link.path}
                            className={cn(styles.navLink, {
                                [styles.active]: router.pathname === link.path
                            })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
