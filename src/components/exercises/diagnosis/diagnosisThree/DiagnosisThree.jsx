import React, {useState} from 'react';
import styles from "./diagnosis-three.module.css";
import Timer from "../../../timer/Timer.jsx";

export const DiagnosisThree = () => {
    const words = ['cat', 'hat', 'fish', 'chick', 'tree', 'bee', 'sheep', 'frog'];
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={styles.block}>
            <h3>Нажми Старт. Прочитай слова вслух. Нажми Стоп</h3>
            <ul className={styles.list}>
                {words.map(word => <li key={word}><p className={styles.word}>{word}</p></li>)}
            </ul>
            <div className={styles.btnWrapper}>
                <button onMouseDown={() => setIsRunning(true)} className={styles.btn}>Старт</button>
                <Timer isRunning={isRunning} />
                <button onMouseDown={() => setIsRunning(false)} className={styles.btn}>Стоп</button>
            </div>
        </div>
    );
};