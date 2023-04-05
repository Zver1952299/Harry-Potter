import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import cn from 'classnames';

import { getApiResourse } from '@service/network';
import { API_ALL_CHARACTERS } from '@constants/api';
import StudentsList from '@components/StudentsPage/StudentsList/StudentsList';
import NoImage from '@images/NoImage.png';
import cross from '@images/cross.svg';

import styles from './SearchPage.module.css';

const SearchPage = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [findRes, setFindRes] = useState('');

    const getResponse = async param => {
        const res = await getApiResourse(API_ALL_CHARACTERS);

        const resFind = res.filter(item => {
            
            if (item.name.indexOf(param) !== -1) return item.name;
            
        });

        let result;
        // hello

        if (resFind.length) {
            result = resFind.map(item => {
                if (item.image === '') {
                    item.image = NoImage;
                }    

                return {
                    name: item.name,
                    id: item.id,
                    image: item.image
                }})
        }

        setFindRes(result);
    }

    useEffect(() => {
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 500),
        []
    ); 

    const handleInputChange = value => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    let info;
    if (!findRes) {
        info = <span className={styles.no_result}>No result</span>
    } else {
        info = 
        (findRes && <StudentsList 
            students={findRes} 
            index={0}/>
        )
    }

    return (
        <>
            <h1 className="header__text">Search</h1>
            <div className={styles.wrapper__input}>
                <input
                    type='text'
                    value={inputSearchValue}
                    onChange={(e = '') => handleInputChange(e.target.value)}
                    placeholder="Input character's name"
                    className={styles.input}
                />
                <img
                    onClick={() => inputSearchValue && handleInputChange('')}
                    src={cross}
                    className={cn(styles.clear, !inputSearchValue && styles.clear__disabled)}
                    alt='Clear'    
                />
            </div>
            <div className={styles.wrapper}>{info}</div>
        </>
    )
}

export default SearchPage;