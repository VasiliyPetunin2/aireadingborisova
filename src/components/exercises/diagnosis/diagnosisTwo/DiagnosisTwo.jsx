import styles from './diagnosis-two.module.css';

export const DiagnosisTwo = () => {
    const wordsOne = ['horse', 'fork', 'storm', 'world', 'morning'];
    const wordsTwo = ['clear', 'hear', 'bear', 'near', 'ear'];
    const wordsThree = ['snow', 'grow', 'know', 'town'];
    const wordsFour = ['care', 'share', 'are', 'rare'];
    const wordsFive = ['fruit', 'juice', 'suit', 'build'];
    const wordsSix = ['always', 'walk', 'talk', 'half'];

    return (
        <div className={styles.block}>
            <h3>Прочитай слова и выбери одно лишнее в каждой строке</h3>
            <ul className={styles.list}>
                {wordsOne.map(word => (
                    <li key={word}>
                        <input type="radio" name={'one'} id={word} className={styles.input} />
                        <label htmlFor={word} className={styles.word}>{word}</label>
                    </li>
                ))}
            </ul>
            <ul className={styles.list}>
                {wordsTwo.map(word => (
                    <li key={word}>
                        <input type="radio" name={'two'} id={word} className={styles.input} />
                        <label htmlFor={word} className={styles.word}>{word}</label>
                    </li>
                ))}
            </ul>
            <ul className={styles.list}>
                {wordsThree.map(word => (
                    <li key={word}>
                        <input type="radio" name={'three'} id={word} className={styles.input} />
                        <label htmlFor={word} className={styles.word}>{word}</label>
                    </li>
                ))}
            </ul>
            <ul className={styles.list}>
                {wordsFour.map(word => (
                    <li key={word}>
                        <input type="radio" name={'four'} id={word} className={styles.input} />
                        <label htmlFor={word} className={styles.word}>{word}</label>
                    </li>
                ))}
            </ul>
            <ul className={styles.list}>
                {wordsFive.map(word => (
                    <li key={word}>
                        <input type="radio" name={'five'} id={word} className={styles.input} />
                        <label htmlFor={word} className={styles.word}>{word}</label>
                    </li>
                ))}
            </ul>
            <ul className={styles.list}>
                {wordsSix.map(word => (
                    <li key={word}>
                        <input type="radio" name={'six'} id={word} className={styles.input} />
                        <label htmlFor={word} className={styles.word}>{word}</label>
                    </li>
                ))}
            </ul>
            <button className={styles.btn}>Готово</button>
        </div>
    );
};