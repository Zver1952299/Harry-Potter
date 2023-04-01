import PropTypes from 'prop-types';
import styles from './UiButton.module.css';
import cn from 'classnames';

import '../index.css';

const UiButton = ({
    text, 
    nextPage, 
    disabled,
    theme='griff',
    classes
}) => {
    return (
        <button 
            className={cn(styles.btn, styles[theme], classes)}
            onClick={nextPage} 
            disabled={disabled}
        >
            {text}
        </button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    nextPage: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiButton;