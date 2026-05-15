import logo from "../../assets/aireadingborisovalogo.png";
import styles from './logo.module.css';

const Logo = () => {
    return (
        <section className={styles.container}>
            <img src={logo} className={styles.logo} alt="logo"/>
        </section>


);
};

export default Logo;