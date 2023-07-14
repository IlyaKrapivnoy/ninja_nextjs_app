import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
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
                {navigationLinks.map(({ id, path, label }) => {
                    const isActive =
                        label === 'Ninja List'
                            ? router.pathname.startsWith('/ninjas') ||
                              /\d+$/.test(router.pathname)
                            : router.pathname === path;

                    return (
                        <li key={id} className={styles.navItem}>
                            <Link
                                href={path}
                                className={cn(styles.navLink, {
                                    [styles.active]: isActive
                                })}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
