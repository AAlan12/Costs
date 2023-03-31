import styles from './styles.module.css'
import Savings from "../../objects/Savings"


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Savings/>
            
        </section>
    )
}

export default Home;