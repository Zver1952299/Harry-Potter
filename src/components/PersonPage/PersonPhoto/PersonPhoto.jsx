import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../store/favoriteSlice';

import { setLocalStorage } from '../../../service/localStorage';

import favoriteIcon from '@images/favorite.svg';
import favoriteIconWhite from '@images/favoriteWhite.svg';

import styles from './PersonPhoto.module.css';
import { useEffect } from 'react';

const PersonPhoto = ({ personId, personPhoto, personName, setPersonFavorite, personFavorite}) => {
    const dispatch = useDispatch();

    const payload = (personId, a, b) => {
        return {[personId]: {
            name: a,
            image: b
        }}
    };

    useEffect(() => {
        setLocalStorage('store', payload(personId, personName, personPhoto))
    }, [personId])

    console.log(payload(personId, personName, personPhoto));

    const dispatchFavoritePerson = () => {
        if (personFavorite) {
            dispatch(removeFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(addToFavorite({
                [personId]: {
                    name: personName,
                    image: personPhoto
                }
            }));
            setPersonFavorite(true);

        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>
                <img 
                    className={styles.favorite}
                    src={personFavorite ? favoriteIcon : favoriteIconWhite}
                    onClick={dispatchFavoritePerson} 
                    alt="Add to favorite"
                />
            </div>

            
        </>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personName: PropTypes.string,
    personPhoto: PropTypes.string,
    setPersonFavorite: PropTypes.func,
    personFavorite: PropTypes.bool
}

export default PersonPhoto;