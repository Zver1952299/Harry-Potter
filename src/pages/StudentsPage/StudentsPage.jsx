import { useEffect, useState } from 'react';
import {getApiResourse} from '../../service/network';
import {API_STUDENTS, API_ALL_CHARACTERS} from '../../constants/api';
import StudentsList from '../../components/StudentsPage/StudentsList/StudentsList';

import styles from './StudentsPage.module.css';
import NoImage from '../../images/NoImage.png';


const StudentsPage = () => {
    const [students, setStudents] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResourse(url);

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
        .splice(0, 10);

        setStudents(studentsList);
    }

    useEffect(() => {
        getResource(API_STUDENTS);
    }, []);

    return (
        <>
        {students && <StudentsList students={students}/>}
        </>
    )
}

export default StudentsPage;