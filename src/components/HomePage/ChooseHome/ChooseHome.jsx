import PropTypes from 'prop-types';
import cn from 'classnames';

import { useTheme, THEME_GRIFF, THEME_SLITH, THEME_COGT, THEME_HUFF } from '@context/ThemeProvider';
import imgGryff from '@images/gryffCart.jpg';
import imgSlith from '@images/slithCart.jpg';
import imgHuffl from '@images/hufflCart.jpg';
import imgRaven from '@images/ravenCart.jpg';

import styles from './ChooseHome.module.css';

const ChooseHomeItem = ({
    classes,
    theme,
    img
}) => {
    const isTheme = useTheme();

    return (
        <div 
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <img className={styles.item__img} src={img} alt='House'/>
        </div>
    )
}


ChooseHomeItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    img: PropTypes.string
}

const ChooseHome = () => {
    const elements = [
        {
            theme: THEME_GRIFF,
            img: imgGryff,
            classes: styles.item__griff
        },
        {
            theme: THEME_SLITH,
            img: imgSlith,
            classes: styles.item__slith
        },
        {
            theme: THEME_COGT,
            img: imgRaven,
            classes: styles.item__raven
        },
        {
            theme: THEME_HUFF,
            img: imgHuffl,
            classes: styles.item__huffl
        },
    ];

    return (
        <div className={styles.container}>
            {elements.map(({theme, img, classes}) => (
                <ChooseHomeItem
                    key={theme}
                    theme={theme}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseHome;