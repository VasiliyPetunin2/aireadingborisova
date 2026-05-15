import books from '../../../../assets/books.png';
import football from '../../../../assets/football.png';
import snowing from '../../../../assets/snowing.png';
import picnic from '../../../../assets/picnic.png';
import usingComputer from '../../../../assets/usingComputer.png';
import lesson from '../../../../assets/lesson.png';
import styles from './diagnosis-four.module.css';

export const DiagnosisFour = () => {
    return (
        <div className={styles.block}>
            <h3>Посмотри на картинки. Прочитай предложения. Выбери подходящее под картинку предложение</h3>
            <div className={styles.rowBlock}>
                <img src={football} alt={'football'} className={styles.img}/>
                <ul className={styles.list}>
                    <li>
                        <input type="radio" name={'football'} id={'football1'} className={styles.input}/>
                        <label htmlFor={'football1'} className={styles.label}>They are reading books.</label>
                    </li>
                    <li>
                        <input type="radio" name={'football'} id={'football2'} className={styles.input}/>
                        <label htmlFor={'football2'} className={styles.label}>They are playing football.</label>
                    </li>
                    <li>
                        <input type="radio" name={'football'} id={'football3'} className={styles.input}/>
                        <label htmlFor={'football3'} className={styles.label}>They are eating sandwiches.</label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <img src={snowing} alt={'snowing'} className={styles.img}/>
                <ul className={styles.list}>
                    <li>
                        <input type="radio" name={'snowing'} id={'snowing1'} className={styles.input}/>
                        <label htmlFor={'snowing1'} className={styles.label}>It is raining.</label>
                    </li>
                    <li>
                        <input type="radio" name={'snowing'} id={'snowing2'} className={styles.input}/>
                        <label htmlFor={'snowing2'} className={styles.label}>It is snowing.</label>
                    </li>
                    <li>
                        <input type="radio" name={'snowing'} id={'snowing3'} className={styles.input}/>
                        <label htmlFor={'snowing3'} className={styles.label}>It is sunny.</label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <img src={picnic} alt={'picnic'} className={styles.img}/>
                <ul className={styles.list}>
                    <li>
                        <input type="radio" name={'picnic'} id={'picnic1'} className={styles.input}/>
                        <label htmlFor={'picnic1'} className={styles.label}>They are cooking dinner.</label>
                    </li>
                    <li>
                        <input type="radio" name={'picnic'} id={'picnic2'} className={styles.input}/>
                        <label htmlFor={'picnic2'} className={styles.label}>They are having a picnic.</label>
                    </li>
                    <li>
                        <input type="radio" name={'picnic'} id={'picnic3'} className={styles.input}/>
                        <label htmlFor={'picnic3'} className={styles.label}>They are watching TV.</label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <img src={usingComputer} alt={'usingComputer'} className={styles.img}/>
                <ul className={styles.list}>
                    <li>
                        <input type="radio" name={'usingComputer'} id={'usingComputer1'} className={styles.input}/>
                        <label htmlFor={'usingComputer1'} className={styles.label}>He is sleeping.</label>
                    </li>
                    <li>
                        <input type="radio" name={'usingComputer'} id={'usingComputer2'} className={styles.input}/>
                        <label htmlFor={'usingComputer2'} className={styles.label}>He is using a computer.</label>
                    </li>
                    <li>
                        <input type="radio" name={'usingComputer'} id={'usingComputer3'} className={styles.input}/>
                        <label htmlFor={'usingComputer3'} className={styles.label}>He is playing the guitar.</label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <img src={lesson} alt={'lesson'} className={styles.img}/>
                <ul className={styles.list}>
                    <li>
                        <input type="radio" name={'lesson'} id={'lesson1'} className={styles.input}/>
                        <label htmlFor={'lesson1'} className={styles.label}>She is singing a song.</label>
                    </li>
                    <li>
                        <input type="radio" name={'lesson'} id={'lesson2'} className={styles.input}/>
                        <label htmlFor={'lesson2'} className={styles.label}>She is teaching a lesson.</label>
                    </li>
                    <li>
                        <input type="radio" name={'lesson'} id={'lesson3'} className={styles.input}/>
                        <label htmlFor={'lesson3'} className={styles.label}>She is drawing a picture.</label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <img src={books} alt={'books'} className={styles.img}/>
                <ul className={styles.list}>
                    <li>
                        <input type="radio" name={'books'} id={'books1'} className={styles.input}/>
                        <label htmlFor={'books1'} className={styles.label}>They are playing games.</label>
                    </li>
                    <li>
                        <input type="radio" name={'books'} id={'books2'} className={styles.input}/>
                        <label htmlFor={'books2'} className={styles.label}>They are reading books.</label>
                    </li>
                    <li>
                        <input type="radio" name={'books'} id={'books3'} className={styles.input}/>
                        <label htmlFor={'books3'} className={styles.label}>They are eating lunch.</label>
                    </li>
                </ul>
            </div>
            <button className={styles.btn}>Готово</button>
        </div>
    );
};