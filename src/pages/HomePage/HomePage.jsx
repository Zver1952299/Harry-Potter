import ChooseHome from '@components/HomePage/ChooseHome/ChooseHome';

import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <h1 className='header__text'>Choose your faculty</h1>
            <ChooseHome/>
        </>
    )
}

export default HomePage;