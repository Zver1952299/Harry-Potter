import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import StudentsList from '../../components/StudentsPage/StudentsList/StudentsList';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const [people, setPeople] = useState([]);

    const favoriteItems = useSelector(state => state.favorite.favorites);

    useEffect(() => {
        const arr = Object.entries(favoriteItems);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPeople(res);
        }
    }, [])

    return (
        <>
            <h1 className='header__text'>Favorites</h1>
            {people.length 
                ? <StudentsList students={people}/>
                : <h2 className={styles.comment}>No data</h2>}
            
        </>
    )
}

FavoritesPage.propTypes = {
    data: PropTypes.string
}

export default FavoritesPage;