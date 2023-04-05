import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Favorite from '@components/Favorite/Favorite';
import { useTheme, THEME_GRIFF, THEME_SLITH, THEME_COGT, THEME_HUFF } from '@context/ThemeProvider';



import imgGryff from './img/gryffindor.png';
import imgSlith from './img/slitherin.png';
import imgCogt from './img/ravenclaw.png';
import imgHuff from './img/hufflepuff.png';
import imgDefault from './img/default.png';

import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgDefault);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_GRIFF: setIcon(imgGryff); break;
            case THEME_SLITH: setIcon(imgSlith); break;
            case THEME_COGT: setIcon(imgCogt); break;
            case THEME_HUFF: setIcon(imgHuff); break;
            default: setIcon(imgDefault); break;
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='Harry Potter Logo'/>

            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/students">Characters</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/not-found">Not found</NavLink></li>
            </ul>
            <Favorite/>
        </div>
    )
}

export default Header;