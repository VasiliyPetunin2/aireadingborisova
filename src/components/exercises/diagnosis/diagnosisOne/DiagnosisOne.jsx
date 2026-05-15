import styles from './diagnosis-one.module.css';

export const DiagnosisOne = () => {
    return (
        <div className={styles.block}>
            <h3>Дополни слова недостающими буквами</h3>
            <ul className={styles.list}>
                <li>
                    <div className={styles.word}>
                        <span className={styles.text}>B</span>

                        <input type="text" maxLength="1" className={styles.input}/>

                        <span className={styles.text}>autiful</span>
                    </div>
                </li><li>
                <div className={styles.word}>
                    <span className={styles.text}>C</span>

                    <input type="text" maxLength="1" className={styles.input}/>

                    <span className={styles.text}>n</span>
                </div>
            </li><li>
                <div className={styles.word}>
                    <span className={styles.text}>Comp</span>

                    <input type="text" maxLength="1" className={styles.input}/>

                    <span className={styles.text}>ter</span>
                </div>
            </li><li>
                <div className={styles.word}>
                    <span className={styles.text}>Sept</span>

                    <input type="text" maxLength="1" className={styles.input}/>

                    <span className={styles.text}>mber</span>
                </div>
            </li><li>
                <div className={styles.word}>
                    <span className={styles.text}>S</span>

                    <input type="text" maxLength="1" className={styles.input}/>

                    <span className={styles.text}>mmer</span>
                </div>
            </li><li>
                <div className={styles.word}>
                    <span className={styles.text}>Sm</span>

                    <input type="text" maxLength="2" className={styles.input}/>

                    <span className={styles.text}>ll</span>
                </div>
            </li><li>
                <div className={styles.word}>
                    <span className={styles.text}>Hands</span>

                    <input type="text" maxLength="1" className={styles.input}/>

                    <span className={styles.text}>me</span>
                </div>
            </li>
            </ul>
            <button className={styles.btn}>Готово</button>
        </div>
    );
};