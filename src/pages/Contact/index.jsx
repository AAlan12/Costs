import styles from './styles.module.css'
import Container from '../../objects/Container';
import ContactCard from '../../objects/ContactCard';
import {  FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

function Contact() {
    return(
        <div className={styles.contact_container}>
            <div className={styles.title_container}>
                <h1>Contatos</h1>  
            </div>
            <Container customClass="start">
                <ContactCard name="Linkedin" icon={<FaLinkedin/>} link="https://www.linkedin.com/in/antonioalan/"/>
                <ContactCard name="Github" icon={<FaGithub/>} link="https://github.com/AAlan12"/>
                <ContactCard name="Instagram" icon={<FaInstagram/>} link="https://www.instagram.com/a.alan.12/"/>
                <ContactCard name="Email" icon={<FaEnvelope/>} link="mailto:tonio.alan07@gmail.com"/>
            </Container>
        </div>
    )
}

export default Contact