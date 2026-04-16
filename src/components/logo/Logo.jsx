import logo from "../../assets/logo.png";
import styles from './logo.module.css';

const Logo = () => {
    return (
        <img src={logo} className={styles.logo} alt="logo"/>
    );
};

export default Logo;