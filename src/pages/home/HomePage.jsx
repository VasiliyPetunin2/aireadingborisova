import {pages} from "../../constants/pages.js";
import {useNavigation} from "../../context/NavigationContext.jsx";
import styles from './home-page.module.css';

const HomePage = () => {
    const {setCurrentPage} = useNavigation();

    return (
        <section className={styles.page}>
            <article className={styles.block}>
                <h1 className={styles.heading}>AI Reading</h1>
                <h2 className={styles.subHeading}>Веб-ресурс для формирования техники чтения на английском языке младших школьников</h2>
                <p className={styles.text}>Сайт помогает организовать диагностику, тренировку и коррекцию навыков чтения. В условиях фронтальной работы ресурс используется как инструмент адаптивной и наглядной тренировки.</p>
            </article>
            {/*<section className={styles.block}>*/}
            {/*    <h2>Как это работает?</h2>*/}
            {/*    <ol className={styles.listNumbered}>*/}
            {/*        <li><span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi facere similique? At consequatur, eius et harum, ipsam iusto, libero maiores minus mollitia natus nihil obcaecati quae quia similique vero.</span>*/}
            {/*        </li>*/}
            {/*        <li><span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi facere similique? At consequatur, eius et harum, ipsam iusto, libero maiores minus mollitia natus nihil obcaecati quae quia similique vero.</span>*/}
            {/*        </li>*/}
            {/*        <li><span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi facere similique? At consequatur, eius et harum, ipsam iusto, libero maiores minus mollitia natus nihil obcaecati quae quia similique vero.</span>*/}
            {/*        </li>*/}
            {/*    </ol>*/}
            {/*</section>*/}
            <ul className={styles.list}>
                <li>
                    <button onMouseDown={() => setCurrentPage(pages.DIAGNOSIS.id)} className={styles.btn}>Начать
                        диагностику
                    </button>
                </li>
                <li>
                    <button onMouseDown={() => setCurrentPage(pages.READING.id)} className={styles.btn}>Тренировать
                        чтение
                    </button>
                </li>
                <li>
                    <button onMouseDown={() => setCurrentPage(pages.FORPARENTSANDTEACHERS.id)}
                            className={styles.btn}>Для учителя/родителей
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default HomePage;