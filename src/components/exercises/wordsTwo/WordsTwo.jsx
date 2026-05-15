import bus from '../../../assets/bus.png';
import door from '../../../assets/door.png';
import ocean from '../../../assets/ocean.png';
import skate from '../../../assets/skate.png';
import styles from './words-two.module.css';
import Timer from "../../timer/Timer.jsx";
import {useState} from "react";

export const WordsTwo = () => {
    const wordCombinations = ['lift a double-decker bus', 'swim across the ocean', 'see through a door', 'skateboard'];
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={styles.block}>
            <h3>Прочитай фразу про себя. Соотнеси словосочетание с изображением. Нажми Старт, прочитай вслух. Нажми
                Стоп</h3>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {wordCombinations.map((wordCombination, idx) => <li key={wordCombination}><p
                        className={styles.word}>{idx + 1}. {wordCombination}</p></li>)}
                </ul>
                <ul className={styles.list}>
                    <li key={'bus'}>a. <img className={styles.img} src={bus} alt={'bus'}/></li>
                    <li key={'skate'}>b. <img className={styles.img} src={skate} alt={'skate'}/></li>
                    <li key={'door'}>c. <img className={styles.img} src={door} alt={'door'}/></li>
                    <li key={'ocean'}>d. <img className={styles.img} src={ocean} alt={'ocean'}/></li>
                </ul>
            </div>
            <div className={styles.wrapperColumns}>
                <div className={styles.column}>
                    <p className={styles.word}>1.</p>
                    <input className={styles.input} type={'text'} maxLength={'1'} />
                </div><div className={styles.column}>
                    <p className={styles.word}>2.</p>
                    <input className={styles.input} type={'text'} maxLength={'1'} />
                </div><div className={styles.column}>
                    <p className={styles.word}>3.</p>
                    <input className={styles.input} type={'text'} maxLength={'1'} />
                </div><div className={styles.column}>
                    <p className={styles.word}>4.</p>
                    <input className={styles.input} type={'text'} maxLength={'1'} />
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <button onMouseDown={() => setIsRunning(true)} className={styles.btn}>Старт</button>
                <Timer isRunning={isRunning} />
                <button onMouseDown={() => setIsRunning(false)} className={styles.btn}>Стоп</button>
            </div>
        </div>
    );
};