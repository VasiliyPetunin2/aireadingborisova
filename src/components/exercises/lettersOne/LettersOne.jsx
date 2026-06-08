import styles from './letters-one.module.css';
import {useState} from "react";
import page from './Screenshot 2026-06-08 211337.png';

export const LettersOne = ({setExercise}) => {
    const words = ['green', 'dad', 'small', 'jump', 'weak', 'can', 'door', 'beans', 'fun', 'tall', 'uncle', 'clap', 'Greece', 'bus', 'short', 'back', 'need', 'orphan', 'up', 'all', 'that', 'Portugal', 'cousin', 'talent', 'understand', 'see', 'mum', 'gran', 'Italy', 'young']
    const [isRunning, setIsRunning] = useState(false);

    return (<div className={styles.block}>
        <img src={page} alt={'page'} className={styles.img} />
        <button onMouseDown={() => setExercise({section: 'Буквы и буквосочетания', id: 'letters2'})} className={styles.btn} style={{marginLeft: 'auto'}}>Далее</button>
    </div>);
};