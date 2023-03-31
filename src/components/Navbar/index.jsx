import { Link } from "react-router-dom"
import styles from './styles.module.css';
import Container from "../../objects/Container"
import Logo from "../../objects/Logo"

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <Logo/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>   
        </nav>
    )
}

export default Navbar