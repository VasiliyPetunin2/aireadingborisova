import styles from './diagnosis-five.module.css';
import React, {useState} from "react";
import Timer from "../../../timer/Timer.jsx";

export const DiagnosisFive = () => {
    const [isRunning1, setIsRunning1] = useState(false);
    const [isRunning2, setIsRunning2] = useState(false);
    const [isRunning3, setIsRunning3] = useState(false);
    return (
        <div className={styles.block}>
            <h3>Прочитай текст. Ответь на каждый вопрос, нажимая Старт перед ответом и Стоп после ответа</h3>
            <div className={styles.textBlock}>My name is Oliver. I live in a big city. I like to learn about different
                countries. My favourite subject is Geography. I can name all the continents: Europe, Asia, Africa,
                Australia, North America, South America and Antarctica. I like to look at the map and find new
                countries. My dream is to visit Australia one day.
            </div>
            <ul className={styles.list}>
                <li className={styles.li}>
                    <p className={styles.text}>1. What is Oliver’s favourite subject?</p>
                    <div className={styles.btnWrapper}>
                        <button onMouseDown={() => setIsRunning1(true)} className={styles.btn}>Старт</button>
                        <Timer isRunning={isRunning1}/>
                        <button onMouseDown={() => setIsRunning1(false)} className={styles.btn}>Стоп</button>
                    </div>
                </li>
                <li className={styles.li}>
                    <p className={styles.text}>2. Where does Oliver live?</p>
                    <div className={styles.btnWrapper}>
                        <button onMouseDown={() => setIsRunning2(true)} className={styles.btn}>Старт</button>
                        <Timer isRunning={isRunning2}/>
                        <button onMouseDown={() => setIsRunning2(false)} className={styles.btn}>Стоп</button>
                    </div>
                </li>
                <li className={styles.li}>
                    <p className={styles.text}>3. Can you name three continents from the text?</p>
                    <div className={styles.btnWrapper}>
                        <button onMouseDown={() => setIsRunning3(true)} className={styles.btn}>Старт</button>
                        <Timer isRunning={isRunning3}/>
                        <button onMouseDown={() => setIsRunning3(false)} className={styles.btn}>Стоп</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};