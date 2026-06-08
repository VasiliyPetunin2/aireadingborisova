import frog from '../../../../assets/image_2026-06-08_20-20-11.png';
import butterfly from '../../../../assets/image_2026-06-08_20-20-22.png';
import cake from '../../../../assets/image_2026-06-08_20-20-29.png';
import bedroom from '../../../../assets/image_2026-06-08_20-20-35.png';
import puppy from '../../../../assets/image_2026-06-08_20-20-40.png';
import car from '../../../../assets/image_2026-06-08_20-20-45.png';
import styles from './diagnosis-two.module.css';

export const DiagnosisTwo = () => {
    return (
        <div className={styles.block}>
            <h3>Прочитай слово и выбери соответствующую картинку</h3>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Frog</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Frog'} id={'frog'} className={styles.input}/>
                        <label htmlFor={'frog'} className={styles.label}><img src={frog} alt={'pic1'}
                                                                               className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Butterfly</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Butterfly'} id={'butterfly'} className={styles.input}/>
                        <label htmlFor={'butterfly'} className={styles.label}><img src={butterfly} alt={'pic2'}
                                                                              className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Cake</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Cake'} id={'cake'} className={styles.input}/>
                        <label htmlFor={'cake'} className={styles.label}><img src={cake} alt={'pic3'}
                                                                              className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Bedroom</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Bedroom'} id={'bedroom'} className={styles.input}/>
                        <label htmlFor={'bedroom'} className={styles.label}><img src={bedroom} alt={'pic4'}
                                                                              className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Puppy</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Puppy'} id={'puppy'} className={styles.input}/>
                        <label htmlFor={'puppy'} className={styles.label}><img src={puppy} alt={'pic5'}
                                                                              className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Car</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Car'} id={'car'} className={styles.input}/>
                        <label htmlFor={'car'} className={styles.label}><img src={car} alt={'pic6'}
                                                                              className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <button className={styles.btn}>Готово</button>
        </div>
    );
};