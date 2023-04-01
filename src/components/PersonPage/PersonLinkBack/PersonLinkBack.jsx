import { useNavigate } from 'react-router';
import icon from '@images/arrowLeft.svg';

import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <a 
            href='/'
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={icon} alt='Go back'/>
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack;