import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import WithErrorMessage from '@hoc/withErrorMessage';
import StudentsList from '@components/StudentsPage/StudentsList/StudentsList';
import PeopleNav from '../../components/PeopleNav/PeopleNav';
import NoImage from '@images/NoImage.png';
import UiLoaded from '../../components/UI/UiLoaded/UiLoaded';
import { getApiResourse } from '@service/network';
import { API_STUDENTS, API_ALL_CHARACTERS } from '@constants/api';

import styles from './StudentsPage.module.css';

const StudentsPage = ({setErrorApi}) => {
    const [students, setStudents] = useState(null);
    const [index, setIndex] = useState(0);

    const getResource = async (url) => {
        const res = await getApiResourse(url);

        if (res) {
            const studentsList = res.map(({name, id, image}) => {
                if (image === '') {
                    image = NoImage;
                }
                return {
                    name,
                    image,
                    id
                }
            })
    
            setStudents(studentsList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_STUDENTS);
    }, [index]);

    let info;
    if (!students) {
        info = <UiLoaded/>
    } else {
        info = 
        (students && <StudentsList 
            students={students} 
            index={index}/>
        )
    }

    return (
        <>
            <h1 className='header__text'>Students</h1>
            <PeopleNav
                students={students} 
                index={index} 
                setIndex={setIndex}/>
            <div className={styles.wrapper}>{info}</div>
        </>
    )
}

StudentsPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default WithErrorMessage(StudentsPage);