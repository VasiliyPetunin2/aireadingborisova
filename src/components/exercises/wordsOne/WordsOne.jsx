import React, {useState} from 'react';
import styles from "./words-one.module.css";
import Timer from "../../timer/Timer.jsx";

export const WordsOne = ({setExercise}) => {
    const words = ['slim', 'fat', 'tall', 'short', 'beautiful', 'handsome', 'curly hair', 'straight hair', 'aunt', 'uncle', 'cousin'];
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={styles.block}>
            <h3>Послушай диктора. Нажми Старт. Прочитай слова вслух. Нажми Стоп</h3>
            <ul className={styles.list}>
                {words.map(word => <li key={word}><p className={styles.word}>{word}</p></li>)}
            </ul>
            <button className={styles.btn}>Слушать</button>
            <div className={styles.btnWrapper}>
                <button onMouseDown={() => setIsRunning(true)} className={styles.btn}>Старт</button>
                <Timer isRunning={isRunning} />
                <button onMouseDown={() => setIsRunning(false)} className={styles.btn}>Стоп</button>
            </div>
            <button onMouseDown={() => setExercise({section: 'Слова и словосочетания', id: 'words2'})} className={styles.btn} style={{marginLeft: 'auto'}}>Далее</button>
        </div>
    );
};