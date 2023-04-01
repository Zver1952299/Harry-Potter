import PropTypes from 'prop-types';
import styles from './PersonWand.module.css';

const PersonWand = ({ personWand }) => {
    const {wood, core, length} = personWand;
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                <span className={styles.header}>Wand:</span>
                <li className={styles.list__item}><span>Wood</span>: {wood}</li>        
                <li className={styles.list__item}><span>Core</span>: {core}</li>        
                <li className={styles.list__item}><span>Length</span>: {length}</li>        
            </ul>
        </div>
    )
}

PersonWand.propTypes = {
    PersonWand: PropTypes.array
}

export default PersonWand;