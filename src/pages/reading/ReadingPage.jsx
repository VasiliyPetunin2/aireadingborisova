import {useState} from "react";
import {
    LettersOne,
    LettersTwo,
    LettersThree,
    LettersFour,
    WordsOne,
    WordsTwo,
    WordsThree,
    WordsFour,
    SentencesOne,
    SentencesTwo,
    SentencesThree,
    SentencesFour,
    TextsOne,
    TextsTwo,
    TextsThree,
    TextsFour
} from "../../components/exercises";
import styles from './reading-page.module.css';

const ReadingPage = () => {
    const [exercise, setExercise] = useState({});

    return (
        <section className={styles.page}>
            {Object.keys(exercise).length === 0 && <>
                <div className={styles.block}>
                    <h2>Буквы и буквосочетания</h2>
                    <ul className={styles.list}>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Буквы и буквосочетания', id: 'letters1'})}
                                    className={styles.btn}>Упр. 1
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Буквы и буквосочетания', id: 'letters2'})}
                                    className={styles.btn}>Упр. 2
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Буквы и буквосочетания', id: 'letters3'})}
                                    className={styles.btn}>Упр. 3
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Буквы и буквосочетания', id: 'letters4'})}
                                    className={styles.btn}>Упр. 4
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h2>Слова и словосочетания</h2>
                    <ul className={styles.list}>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Слова и словосочетания', id: 'words1'})}
                                    className={styles.btn}>Упр. 1
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Слова и словосочетания', id: 'words2'})}
                                    className={styles.btn}>Упр. 2
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Слова и словосочетания', id: 'words3'})}
                                    className={styles.btn}>Упр. 3
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Слова и словосочетания', id: 'words4'})}
                                    className={styles.btn}>Упр. 4
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h2>Предложения</h2>
                    <ul className={styles.list}>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Предложения', id: 'sentences1'})}
                                    className={styles.btn}>Упр. 1
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Предложения', id: 'sentences2'})}
                                    className={styles.btn}>Упр. 2
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Предложения', id: 'sentences3'})}
                                    className={styles.btn}>Упр. 3
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Предложения', id: 'sentences4'})}
                                    className={styles.btn}>Упр. 4
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h2>Короткие тексты</h2>
                    <ul className={styles.list}>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Короткие тексты', id: 'texts1'})}
                                    className={styles.btn}>Упр. 1
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Короткие тексты', id: 'texts2'})}
                                    className={styles.btn}>Упр. 2
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Короткие тексты', id: 'texts3'})}
                                    className={styles.btn}>Упр. 3
                            </button>
                        </li>
                        <li>
                            <button onMouseDown={() => setExercise({section: 'Короткие тексты', id: 'texts4'})}
                                    className={styles.btn}>Упр. 4
                            </button>
                        </li>
                    </ul>
                </div>
            </>}
            {exercise.id === 'letters1' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 1</h2>
                <LettersOne/>
            </div>}
            {exercise.id === 'letters2' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 2</h2>
                <LettersTwo/>
            </div>}
            {exercise.id === 'letters3' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 3</h2>
                <LettersThree/>
            </div>}
            {exercise.id === 'letters4' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 4</h2>
                <LettersFour/>
            </div>}
            {exercise.id === 'words1' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 1</h2>
                <WordsOne/>
            </div>}
            {exercise.id === 'words2' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 2</h2>
                <WordsTwo/>
            </div>}
            {exercise.id === 'words3' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 3</h2>
                <WordsThree/>
            </div>}
            {exercise.id === 'words4' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 4</h2>
                <WordsFour/>
            </div>}
            {exercise.id === 'sentences1' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 1</h2>
                <SentencesOne/>
            </div>}
            {exercise.id === 'sentences2' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 2</h2>
                <SentencesTwo/>
            </div>}
            {exercise.id === 'sentences3' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 3</h2>
                <SentencesThree/>
            </div>}
            {exercise.id === 'sentences4' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 4</h2>
                <SentencesFour/>
            </div>}
            {exercise.id === 'texts1' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 1</h2>
                <TextsOne/>
            </div>}
            {exercise.id === 'texts2' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 2</h2>
                <TextsTwo/>
            </div>}
            {exercise.id === 'texts3' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 3</h2>
                <TextsThree/>
            </div>}
            {exercise.id === 'texts4' && <div className={styles.block}>
                <h2>{exercise.section}, Упражнение 4</h2>
                <TextsFour/>
            </div>}
        </section>
    );
};

export default ReadingPage;