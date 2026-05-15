import {pages} from '../../constants/pages.js';
import {useNavigation} from "../../context/NavigationContext.jsx";
import styles from './nav.module.css';

const Nav = () => {
    const {currentPage, setCurrentPage} = useNavigation();

    return (
        <nav className={styles.nav}>
            {Object.entries(pages).map(([page, info]) => (
                <button onMouseDown={() => setCurrentPage(info.id)}
                        className={`${styles.btn} ${currentPage === info.id ? styles.activePage : ''}`}
                        key={info.id}>{info.name}</button>
            ))}
        </nav>
    );
};

export default Nav;