import PropTypes from 'prop-types';
import styles from './PeopleNav.module.css';

import UiButton from '../UI/UiButton/UiButton';

const PeopleNav = ({students, index, setIndex}) => {
    const nextPage = () => {
        setIndex(index+10);
    }
    
    const prevPage = () => {
        setIndex(index-10);
    }
    
    let btnNext,
        btnPrev;

    if (students) {
        if (students.length < index+10) {
            btnNext = <UiButton text={"Next"} nextPage={nextPage} disabled={true}/>;
        } else {
            btnNext = <UiButton text={"Next"} nextPage={nextPage} disabled={false}/>;
        }
    
        if (index === 0) {
            btnPrev = <UiButton text={"Prev"} nextPage={prevPage} disabled={true}/>;
        } else {
            btnPrev = <UiButton text={"Prev"} nextPage={prevPage} disabled={false}/>;
        }
    }

    return (
        <div className={styles.nav}>
            {btnPrev}
            {btnNext}
        </div>
    )
}

PeopleNav.propTypes = {
    students: PropTypes.array,
    index: PropTypes.number,
    setIndex: PropTypes.func
}

export default PeopleNav;