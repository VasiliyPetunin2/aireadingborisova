import croc1 from '../../../../assets/CrocodilePic1.png';
import croc2 from '../../../../assets/CrocodilePic2.png';
import croc3 from '../../../../assets/CrocodilePic3.png';
import helic1 from '../../../../assets/HelicopterPic1.png';
import helic2 from '../../../../assets/HelicopterPic2.png';
import helic3 from '../../../../assets/HelicopterPic3.png';
import libr1 from '../../../../assets/LibraryPic1.png';
import libr2 from '../../../../assets/LibraryPic2.png';
import libr3 from '../../../../assets/LibraryPic3.png';
import moun1 from '../../../../assets/MountainPic1.png';
import moun2 from '../../../../assets/MountainPic2.png';
import moun3 from '../../../../assets/MountainPic3.png';
import cal1 from '../../../../assets/CalendarPic1.png';
import cal2 from '../../../../assets/CalendarPic2.png';
import cal3 from '../../../../assets/CalendarPic3.png';
import comp1 from '../../../../assets/ComputerPic1.png';
import comp2 from '../../../../assets/ComputerPic2.png';
import comp3 from '../../../../assets/ComputerPic3.png';
import styles from './diagnosis-three.module.css';

export const DiagnosisThree = () => {
    return (
        <div className={styles.block}>
            <h3>Прочитай слово и выбери правильную картинку</h3>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Crocodile</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Crocodile'} id={'croc1'} className={styles.input}/>
                        <label htmlFor={'croc1'} className={styles.label}><img src={croc1} alt={'pic1'}
                                                                        className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Crocodile'} id={'croc2'} className={styles.input}/>
                        <label htmlFor={'croc2'} className={styles.label}><img src={croc2} alt={'pic2'}
                                                                        className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Crocodile'} id={'croc3'} className={styles.input}/>
                        <label htmlFor={'croc3'} className={styles.label}><img src={croc3} alt={'pic3'}
                                                                        className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Helicopter</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Helicopter'} id={'helic1'} className={styles.input}/>
                        <label htmlFor={'helic1'} className={styles.label}><img src={helic1} alt={'pic1'}
                                                                        className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Helicopter'} id={'helic2'} className={styles.input}/>
                        <label htmlFor={'helic2'} className={styles.label}><img src={helic2} alt={'pic2'}
                                                                        className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Helicopter'} id={'helic3'} className={styles.input}/>
                        <label htmlFor={'helic3'} className={styles.label}><img src={helic3} alt={'pic3'}
                                                                        className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Library</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Library'} id={'libr1'} className={styles.input}/>
                        <label htmlFor={'libr1'} className={styles.label}><img src={libr1} alt={'pic1'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Library'} id={'libr2'} className={styles.input}/>
                        <label htmlFor={'libr2'} className={styles.label}><img src={libr2} alt={'pic2'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Library'} id={'libr3'} className={styles.input}/>
                        <label htmlFor={'libr3'} className={styles.label}><img src={libr3} alt={'pic3'}
                                                                          className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Mountain</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Mountain'} id={'moun1'} className={styles.input}/>
                        <label htmlFor={'moun1'} className={styles.label}><img src={moun1} alt={'pic1'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Mountain'} id={'moun2'} className={styles.input}/>
                        <label htmlFor={'moun2'} className={styles.label}><img src={moun2} alt={'pic2'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Mountain'} id={'moun3'} className={styles.input}/>
                        <label htmlFor={'moun3'} className={styles.label}><img src={moun3} alt={'pic3'}
                                                                          className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Calendar</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Calendar'} id={'cal1'} className={styles.input}/>
                        <label htmlFor={'cal1'} className={styles.label}><img src={cal1} alt={'pic1'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Calendar'} id={'cal2'} className={styles.input}/>
                        <label htmlFor={'cal2'} className={styles.label}><img src={cal2} alt={'pic2'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Calendar'} id={'cal3'} className={styles.input}/>
                        <label htmlFor={'cal3'} className={styles.label}><img src={cal3} alt={'pic3'}
                                                                          className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <div className={styles.rowBlock}>
                <p className={styles.word}>Computer</p>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <input type="radio" name={'Computer'} id={'comp1'} className={styles.input}/>
                        <label htmlFor={'comp1'} className={styles.label}><img src={comp1} alt={'pic1'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Computer'} id={'comp2'} className={styles.input}/>
                        <label htmlFor={'comp2'} className={styles.label}><img src={comp2} alt={'pic2'}
                                                                          className={styles.img}/></label>
                    </li>
                    <li className={styles.li}>
                        <input type="radio" name={'Computer'} id={'comp3'} className={styles.input}/>
                        <label htmlFor={'comp3'} className={styles.label}><img src={comp3} alt={'pic3'}
                                                                          className={styles.img}/></label>
                    </li>
                </ul>
            </div>
            <button className={styles.btn}>Готово</button>
        </div>
    );
};