import React, {useState} from "react";
import Timer from "../../timer/Timer.jsx";
import styles from './letters-two.module.css';

export const LettersTwo = ({setExercise}) => {
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={styles.block}>
            <h3>Дополни слова. Используй <span className={styles.letter}>a, u, ea, ee</span>. Нажми на Старт, произнеси
                слова. Нажми стоп</h3>
            <ul className={styles.list}>
                <li>
                    <div className={styles.word}>
                        <span className={styles.text}>b</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>s</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}>t</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>ll</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}>gr</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>n</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}>b</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>ns</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}></span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>ncle</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}>d</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>d</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}>b</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>ck</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}>w</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>k</span>
                    </div>
                </li><li>
                    <div className={styles.word}>
                        <span className={styles.text}>sm</span>

                        <input type="text" maxLength="2" className={styles.input}/>

                        <span className={styles.text}>ll</span>
                    </div>
                </li>
            </ul>
            <div className={styles.btnWrapper}>
                <button onMouseDown={() => setIsRunning(true)} className={styles.btn}>Старт</button>
                <Timer isRunning={isRunning}/>
                <button onMouseDown={() => setIsRunning(false)} className={styles.btn}>Стоп</button>
            </div>
            <button onMouseDown={() => setExercise({})} className={styles.btn} style={{marginLeft: 'auto'}}>Вернуться</button>
        </div>
    );
};