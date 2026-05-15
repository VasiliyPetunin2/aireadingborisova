import placeholder from '/public/placeholderMonitoring.png';
import styles from './for-parent-and-teachers-page.module.css';

const ForParentsAndTeachersPage = () => {
    return (
        <section className={styles.page}>
            <div className={styles.placeholder} style={{ backgroundImage: `url(${placeholder})` }}></div>
        </section>
    );
};

export default ForParentsAndTeachersPage;