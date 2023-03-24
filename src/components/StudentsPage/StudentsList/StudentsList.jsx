import styles from './StudentsList.module.css';
import NoImage from '../../../images/NoImage.png';

const StudentsList = ({students}) => {
    return (
        <ul className={styles.list__container}>
            {students.map(({name, id, image}) => 
            <li 
                className={styles.list__item} 
                key={id}>
                    <a href='/'>
                        <img className={styles.student__photo} src={image} alt={name} />
                        <p>{name}</p>
                    </a>
            </li>
            )}
        </ul>
    )
}

export default StudentsList;