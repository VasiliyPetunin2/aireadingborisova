import styles from './diagnosis-one.module.css';

export const DiagnosisOne = () => {
    return (
        <div className={styles.block}>
            <h3>Прочитай слова. Определи, рифмуются ли они. Нажми YES, если они рифмуются. Нажми NO, если не рифмуются</h3>
            <ul className={styles.list}>
                <li className={styles.li}>
                    <p className={styles.text}>1. feet - meat</p>
                    <div className={styles.btnWrapper}>
                        <input type="radio" name={'feet-meat'} id={'feet'} className={styles.input} />
                        <label htmlFor={'feet'} className={styles.word}>YES</label>
                        <input type="radio" name={'feet-meat'} id={'meat'} className={styles.input} />
                        <label htmlFor={'meat'} className={styles.word}>NO</label>
                    </div>
                </li>
                <li className={styles.li}>
                    <p className={styles.text}>2. cake - bike</p>
                    <div className={styles.btnWrapper}>
                        <input type="radio" name={'cake-bike'} id={'cake'} className={styles.input} />
                        <label htmlFor={'cake'} className={styles.word}>YES</label>
                        <input type="radio" name={'cake-bike'} id={'bike'} className={styles.input} />
                        <label htmlFor={'bike'} className={styles.word}>NO</label>
                    </div>
                </li>
                <li className={styles.li}>
                    <p className={styles.text}>3. sheep - ship</p>
                    <div className={styles.btnWrapper}>
                        <input type="radio" name={'sheep-ship'} id={'sheep'} className={styles.input} />
                        <label htmlFor={'sheep'} className={styles.word}>YES</label>
                        <input type="radio" name={'sheep-ship'} id={'ship'} className={styles.input} />
                        <label htmlFor={'ship'} className={styles.word}>NO</label>
                    </div>
                </li>
                <li className={styles.li}>
                    <p className={styles.text}>4. cup - hat</p>
                    <div className={styles.btnWrapper}>
                        <input type="radio" name={'cup-hat'} id={'cup'} className={styles.input} />
                        <label htmlFor={'cup'} className={styles.word}>YES</label>
                        <input type="radio" name={'cup-hat'} id={'hat'} className={styles.input} />
                        <label htmlFor={'hat'} className={styles.word}>NO</label>
                    </div>
                </li>
                <li className={styles.li}>
                    <p className={styles.text}>5. hen - ten</p>
                    <div className={styles.btnWrapper}>
                        <input type="radio" name={'hen-ten'} id={'hen'} className={styles.input} />
                        <label htmlFor={'hen'} className={styles.word}>YES</label>
                        <input type="radio" name={'hen-ten'} id={'ten'} className={styles.input} />
                        <label htmlFor={'ten'} className={styles.word}>NO</label>
                    </div>
                </li>
            </ul>
            <button className={styles.btn}>Готово</button>
        </div>
    );
};