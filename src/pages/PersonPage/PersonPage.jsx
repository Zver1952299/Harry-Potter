import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import PersonWand from '@components/PersonPage/PersonWand/PersonWand';

import WithErrorMessage from '@hoc/withErrorMessage';
import NoImage from '@images/NoImage.png';
import UiLoaded from '../../components/UI/UiLoaded/UiLoaded';
import { getApiResourse } from '@service/network';
import { API_ALL_CHARACTERS } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personWand, setPersonWand] = useState(null);
    const [personId, setPersonId] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const id = useParams().id;
    const storeData = useSelector(state => state.favorite.favorites);

    useEffect(() => {
        (async () => {
            const res = await getApiResourse(API_ALL_CHARACTERS);

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            if (res) {
                const item = res.find(element => element.id === id);

                setPersonId(id);

                setPersonInfo([
                    {title: 'Species', data: item.species},
                    {title: 'Gender', data: item.gender},
                    {title: 'Ancestry', data: item.ancestry},
                    {title: 'Eye Color', data: item.eyeColour},
                    {title: 'Hair Color', data: item.hairColour},
                    {title: 'House', data: item.house}
                ]);

                setPersonName(item.name);
                
                setPersonPhoto(item.image);

                item.wand.length && setPersonWand(item.wand);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })()
    }, [])

    if (personPhoto === '') {
        setPersonPhoto(NoImage);
    }

    console.log(personFavorite);

    let info;
    if (!personInfo) {
        info = <UiLoaded/>
    } else {
        info = <div className={styles.wrapper}>
                        <span className={styles.person__name}>{personName}</span>

                        <div className={styles.container}>
                            <PersonPhoto 
                                personId={personId}
                                personPhoto={personPhoto}
                                personName={personName}
                                personFavorite={personFavorite}
                                setPersonFavorite={setPersonFavorite}
                            />

                            {personInfo && <PersonInfo personInfo={personInfo}/>}

                            {personWand && <PersonWand personWand={personWand}/>}
                        </div>
                        
                    </div>
    }

    return (
        <>
            <PersonLinkBack />
            {info}
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default WithErrorMessage(PersonPage);