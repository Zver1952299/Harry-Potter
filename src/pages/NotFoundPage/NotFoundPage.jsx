import { useLocation } from 'react-router';

import img404 from '@images/404.png';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <img className={styles.img} src={img404} alt="404"/>
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage;