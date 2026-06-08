import Timer from "../../timer/Timer.jsx";
import family from '../../../assets/sentences1.png';
import styles from './sentences-one.module.css';
import {useState} from "react";


export const SentencesOne = ({setExercise}) => {
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={styles.block}>
            <h3>Прочитай описания и подбери правильное имя под каждое описание. Нажми Старт. Прочитай предложения. Нажми
                Стоп.</h3>
            <div className={styles.wrapper}>
                <img className={styles.img} src={family} alt={'family'}/>
                <ul>
                    <li className={styles.text} key={'Fedor'}>1. ... is old and fat and has got a big nose and very funny.</li>
                    <li className={styles.text} key={'Mary'}>2. ... is very kind and friendly and has got long curly hair.</li>
                    <li className={styles.text} key={'Petya'}>3. ... is very clever and has got dark hair and big ears.</li>
                </ul>
            </div>
            <div className={styles.wrapperColumns}>
                <div className={styles.column}>
                    <p>1.</p>
                    <input className={styles.input} type={'text'} />
                </div>
                <div className={styles.column}>
                    <p>2.</p>
                    <input className={styles.input} type={'text'} />
                </div>
                <div className={styles.column}>
                    <p>3.</p>
                    <input className={styles.input} type={'text'} />
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <button onMouseDown={() => setIsRunning(true)} className={styles.btn}>Старт</button>
                <Timer isRunning={isRunning} />
                <button onMouseDown={() => setIsRunning(false)} className={styles.btn}>Стоп</button>
            </div>
            <button onMouseDown={() => setExercise({section: 'Предложения', id: 'sentences2'})} className={styles.btn} style={{marginLeft: 'auto'}}>Далее</button>
        </div>
    );
};