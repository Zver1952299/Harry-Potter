import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './StudentsList.module.css';

const StudentsList = ({students, index = 0}) => {
    return (
        <ul className={styles.list__container}>
            {students.map(({name, id, image}) => 
                <li 
                    className={styles.list__item} 
                    key={id}>
                        <Link to={`/students/${id}`}>
                            <img className={styles.student__photo} src={image} alt={name} />
                            <p>{name}</p>
                        </Link>
                </li>
            ).splice(index, 10)}
        </ul>
    )
}

StudentsList.propTypes = {
    students: PropTypes.array
}

export default StudentsList;