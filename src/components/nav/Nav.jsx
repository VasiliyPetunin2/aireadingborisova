import {pages} from '../../constants/pages.js';
import styles from './nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            {Object.entries(pages).map(([page, info]) => (
                <button className={styles.btn} key={info.id}>{info.name}</button>
            ))}
        </nav>
    );
};

export default Nav;