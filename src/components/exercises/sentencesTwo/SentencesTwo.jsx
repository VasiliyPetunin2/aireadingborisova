import dialogue from '../../../assets/IMG_0651.JPG';
import styles from './sentences-two.module.css';
import React from "react";

export const SentencesTwo = ({setExercise}) => {
    return (
        <div className={styles.block}>
            <h3>Прочитай диалог и выполни упражнение ниже</h3>
            <img src={dialogue} alt={'dialogue'} />
            <h4>Прочитай диалог ещё раз и исправь ошибки. Замени выделенные слова</h4>
            <p>In the magic mirror ...</p>
            <div className={styles.wrapperColumns}>
                <div className={styles.column}>
                    <p>1. Emma's got <span className={styles.subtext}>long</span> hair</p>
                    <input className={styles.input} type={'text'} />
                </div>
                <div className={styles.column}>
                    <p>2. Mona's got <span className={styles.subtext}>curly</span> hair</p>
                    <input className={styles.input} type={'text'} />
                </div>
                <div className={styles.column}>
                    <p>3. Lee's <span className={styles.subtext}>short</span></p>
                    <input className={styles.input} type={'text'} />
                </div><div className={styles.column}>
                    <p>4. Alvin's <span className={styles.subtext}>thin</span></p>
                    <input className={styles.input} type={'text'} />
                </div><div className={styles.column}>
                    <p>5. Alvin looks like his <span className={styles.subtext}>aunt</span></p>
                    <input className={styles.input} type={'text'} />
                </div>
            </div>
            <button onMouseDown={() => setExercise({})} className={styles.btn} style={{marginLeft: 'auto'}}>Вернуться</button>
        </div>
    );
};