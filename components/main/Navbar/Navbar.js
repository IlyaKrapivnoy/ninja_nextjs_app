import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './Navbar.module.scss';
import Logo from '../../../public/logo.png';
import { navigationLinks } from '../../../data/navbar';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <Image src={Logo} width="100" alt="logo" />
                </Link>
            </div>

            <ul className={styles.navItems}>
                {navigationLinks.map(({ id, path, label }) => (
                    <li key={id} className={styles.navItem}>
                        <Link
                            href={path}
                            className={cn(styles.navLink, {
                                [styles.active]: router.pathname === path
                            })}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
