import styles from './letters-one.module.css';
import Timer from "../../timer/Timer.jsx";
import {useState} from "react";

export const LettersOne = () => {
    const words = ['green', 'dad', 'small', 'jump', 'weak', 'can', 'door', 'beans', 'fun', 'tall', 'uncle', 'clap', 'Greece', 'bus', 'short', 'back', 'need', 'orphan', 'up', 'all', 'that', 'Portugal', 'cousin', 'talent', 'understand', 'see', 'mum', 'gran', 'Italy', 'young']
    const [isRunning, setIsRunning] = useState(false);

    return (<div className={styles.block}>
        <h3>Прочитай слова про себя. Перетащи слова в правильные звуковые группы. Нажми
            старт и прочитай слова вслух по группам. Нажми стоп.</h3>
        <ul className={styles.list}>
            {words.map(word => <li key={word} draggable><p className={styles.word}>{word}</p></li>)}
        </ul>
        <div className={styles.lists}>
            <div className={styles.wrapper}>
                <p className={styles.word}>/æ/</p>
                <ul className={styles.list}></ul>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.word}>/ʌ/</p>
                <ul className={styles.list}></ul>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.word}>/iː/</p>
                <ul className={styles.list}></ul>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.word}>/ɔː/</p>
                <ul className={styles.list}></ul>
            </div>
        </div>
        <div className={styles.btnWrapper}>
            <button onMouseDown={() => setIsRunning(true)} className={styles.btn}>Старт</button>
            <Timer isRunning={isRunning}/>
            <button onMouseDown={() => setIsRunning(false)} className={styles.btn}>Стоп</button>
        </div>
    </div>);
};