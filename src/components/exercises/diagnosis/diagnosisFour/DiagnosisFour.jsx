import React, {useState} from 'react';
import styles from "./diagnosis-four.module.css";
import Timer from "../../../timer/Timer.jsx";

export const DiagnosisFour = () => {
    const words = ['a black cat', 'a green tree', 'a brown box', 'a white sheep', 'a pink cake', 'a red ball'];
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={styles.block}>
            <h3>Нажми Старт. Прочитай словосочетания вслух. Нажми Стоп</h3>
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