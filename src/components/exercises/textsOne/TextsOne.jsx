import village from '../../../assets/village.png';
import craftsman from '../../../assets/craftsman.png';
import malachite from '../../../assets/malachite.png';
import weak from '../../../assets/weak.png';
import carve from '../../../assets/carve.png';
import styles from './texts-one.module.css';
import React, {useState} from "react";
import Timer from "../../timer/Timer.jsx";

export const TextsOne = ({setExercise}) => {
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={styles.block}>
            <h3>Прослушай слова, затем прочитай их</h3>
            <ul className={styles.list}>
                <li key={'village'}>Village <img className={styles.img} src={village} alt={'village'}/></li>
                <li key={'craftsman'}>Craftsman <img className={styles.img} src={craftsman} alt={'craftsman'}/></li>
                <li key={'malachite'}>Malachite <img className={styles.img} src={malachite} alt={'malachite'}/></li>
                <li key={'weak'}>Weak <img className={styles.img} src={weak} alt={'weak'}/></li>
                <li key={'carve'}>Carve <img className={styles.img} src={carve} alt={'carve'}/></li>
            </ul>
            <button className={styles.btn}>Слушать</button>
            <h4>Прослушай текст. Прочитай его про себя. Нажми Старт. Прочитай текст вслух. Нажми Стоп.</h4>
            <div className={styles.textBlock}>This is a village in the Ural Mountains, a long time ago. Prokopych is a
                famous craftsman. He makes jewellery and he is the best craftsman in the Urals. He uses malachite, a
                beautiful green stone, to make his jewellery. The people of the village want Prokopych to teach some of
                the village boys how to make jewellery, but none of them have the talent.<br/><br/>
                “I’m sorry,” Prokopych says. “I cannot teach these boys. They haven’t got the talent. I need a boy who
                understands what beauty is!”<br/><br/>
                There is a young orphan boy, Danila, in the village. Danila is weak and can’t work like the other boys.
                Prokopych has no children of his own, so he takes Danila into his home.
            </div>
            <button className={styles.btn}>Слушать</button>
            <div className={styles.btnWrapper}>
                <button onMouseDown={() => setIsRunning(true)} className={styles.btn}>Старт</button>
                <Timer isRunning={isRunning}/>
                <button onMouseDown={() => setIsRunning(false)} className={styles.btn}>Стоп</button>
            </div>
            <button onMouseDown={() => setExercise({})} className={styles.btn} style={{marginLeft: 'auto'}}>Вернуться</button>
        </div>
    );
};