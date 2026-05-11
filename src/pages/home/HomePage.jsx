import {pages} from "../../constants/pages.js";
import {useNavigation} from "../../context/NavigationContext.jsx";
import styles from './home-page.module.css';

const HomePage = () => {
    const {setCurrentPage} = useNavigation();

    return (
        <section className={styles.page}>
            <article className={styles.block}>
                <h1>Главная</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis
                    cum ipsa necessitatibus praesentium qui ullam voluptates. Accusantium ad adipisci amet, commodi
                    consequatur distinctio dolore doloremque dolorum ea error est laborum nesciunt nihil nobis numquam
                    porro possimus praesentium qui rerum sit veritatis, vero, voluptas voluptates? Adipisci aliquid
                    dolor dolores id illum impedit iusto, nemo nostrum officiis porro, quasi, rerum tempore velit vitae
                    voluptatem? Atque error esse, fugit molestias nemo repellendus soluta temporibus vero. Ab cum
                    cupiditate doloribus ducimus incidunt omnis quas sed tempore vitae. Amet asperiores eos, illum ipsam
                    itaque modi, qui quos repellendus similique, totam ut vitae voluptatem voluptatum!</p>
            </article>
            <section className={styles.block}>
                <h2>Как это работает?</h2>
                <ol className={styles.listNumbered}>
                    <li><span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi facere similique? At consequatur, eius et harum, ipsam iusto, libero maiores minus mollitia natus nihil obcaecati quae quia similique vero.</span>
                    </li>
                    <li><span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi facere similique? At consequatur, eius et harum, ipsam iusto, libero maiores minus mollitia natus nihil obcaecati quae quia similique vero.</span>
                    </li>
                    <li><span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi facere similique? At consequatur, eius et harum, ipsam iusto, libero maiores minus mollitia natus nihil obcaecati quae quia similique vero.</span>
                    </li>
                </ol>
            </section>
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