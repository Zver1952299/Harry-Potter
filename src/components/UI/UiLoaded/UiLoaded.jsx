import LoadingImg from '@images/loading.svg';
import styles from './UiLoaded.module.css';

const UiLoaded = () => {
    return (
        <div className={styles.loading}>
            <img src={LoadingImg} alt="Loadidng" />
        </div>
    )
}

export default UiLoaded;