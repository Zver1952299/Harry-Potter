import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from '@images/bookmark.svg';

import styles from './Favorite.module.css';

const Favorite = () => {
    const [count, setCount] = useState(0);

    const storeData = useSelector(state => state.favorite.favorites);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    })
    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img 
                    className={styles.favorite} 
                    src={icon} 
                    alt="Favorite" 
                />
            </Link>
        </div>
    )
}

export default Favorite;