import styles from './styles.module.css'
import Savings from "../../objects/Savings"
import LinkButton from '../../objects/LinkButton';


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <Savings/>
            
        </section>
    )
}

export default Home;