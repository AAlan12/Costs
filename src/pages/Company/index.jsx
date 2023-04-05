import styles from './styles.module.css'
import Container from '../../objects/Container'

function Company() {
    return (
        <>
            <div className={styles.company_details}>
                <Container customClass="column">
                    <div className={styles.company_container}>
                        <h1>Nossa Empresa</h1>
                        <p>Acima de tudo, é fundamental ressaltar que a consolidação das estruturas apresenta tendências no sentido de aprovar a manutenção das diversas correntes de pensamento.</p>
                        <p>O cuidado em identificar pontos críticos no julgamento imparcial das eventualidades acarreta um processo de reformulação e modernização das direções preferenciais no sentido do progresso.</p>
                        <p>Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual agrega valor ao estabelecimento do remanejamento dos quadros funcionais.</p>
                        <p>Desta maneira, a determinação clara de objetivos prepara-nos para enfrentar situações atípicas decorrentes das direções preferenciais no sentido do progresso.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Company;