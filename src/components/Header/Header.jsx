import { NavLink } from 'react-router-dom';

import Favorite from '@components/Favorite/Favorite';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/students">Students</NavLink></li>
                <li><NavLink to="/not-found">Not found</NavLink></li>
            </ul>
            <Favorite/>
        </div>
    )
}

export default Header;