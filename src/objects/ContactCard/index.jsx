import styles from './styles.module.css';
import { Link } from 'react-router-dom'



function ContactCard({ name, icon, link }) {
    return (
        <div className={styles.contact_card}>
            <Link to={link} target="_blank" rel="noopener noreferrer">
                {icon}
                <h4>{name}</h4>
            </Link>
        </div>
    )
}

export default ContactCard