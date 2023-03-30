import { Link } from "react-router-dom"
import styles from './styles.module.css';
import Bloco from "../../objects/Bloco"
import Logo from "../../objects/Logo"

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Bloco>
                <Link to="/">
                    <Logo/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/newproject">Novo Projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Bloco>   
        </nav>
    )
}

export default Navbar