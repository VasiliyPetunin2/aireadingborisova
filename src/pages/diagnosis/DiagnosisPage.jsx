import {useState} from "react";
import {
    DiagnosisOne,
    DiagnosisTwo,
    DiagnosisThree,
    DiagnosisFour,
    DiagnosisFive
} from "../../components/exercises/diagnosis/index.js";
import styles from './diagnosis-page.module.css';

const DiagnosisPage = () => {
    const [stage, setStage] = useState('Буквы и буквосочетания');

    return (
        <section className={styles.page}>
            <div className={styles.block}>
                <h2>Диагностический модуль. Упражнение 1</h2>
                <DiagnosisOne />
                <h2>Упражнение 2</h2>
                <DiagnosisTwo />
                <h2>Упражнение 3</h2>
                <DiagnosisThree />
                <h2>Упражнение 4</h2>
                <DiagnosisFour />
                <h2>Упражнение 5</h2>
                <DiagnosisFive />
                <h2>После выполнения заданий нажми Далее</h2>
                <button className={styles.btn}>Далее</button>
            </div>
        </section>
    );
};

export default DiagnosisPage;