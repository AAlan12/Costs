import styles from './styles.module.css'
import Container from '../../objects/Container';

function Contact() {
    return(
        <div className={styles.contact_container}>
            <div className={styles.title_container}>
                <h1>Contatos</h1>  
            </div>
            <Container customClass="start">
                
            </Container>
        </div>
    )
}

export default Contact