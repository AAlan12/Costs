import styles from './styles.module.css';

function Bloco(props) {
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Bloco