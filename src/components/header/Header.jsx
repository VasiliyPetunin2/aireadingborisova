import {Logo, Nav} from '../index.js';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
        </header>
    );
};

export default Header;