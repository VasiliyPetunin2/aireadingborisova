import {useState} from "react";
import {LettersOne} from "../../components/exercises";
import styles from './diagnosis-page.module.css';

const DiagnosisPage = () => {
    const [stage, setStage] = useState('Буквы и буквосочетания');

    return (
        <section className={styles.page}>
            <div className={styles.block}>
                <h2>Диагностический модуль. {stage}</h2>
                <LettersOne />
                <h2>После выполнения задания нажми Далее</h2>
                <button className={styles.btn}>Далее</button>
            </div>
        </section>
    );
};

export default DiagnosisPage;