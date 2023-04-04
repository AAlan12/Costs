import styles from './styles.module.css'
import Container from '../../objects/Container'

function Company() {
    return (
        <>
            <div className={styles.company_details}>
                <Container customClass="column">
                    <div className={styles.company_container}>
                        <h1>Nossa Empresa</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum totam unde voluptatem. Fugit maxime cumque aspernatur omnis, eum natus placeat, labore vitae nulla corporis dolor, accusantium eius aliquid non molestias.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum totam unde voluptatem. Fugit maxime cumque aspernatur omnis, eum natus placeat, labore vitae nulla corporis dolor, accusantium eius aliquid non molestias.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum totam unde voluptatem. Fugit maxime cumque aspernatur omnis, eum natus placeat, labore vitae nulla corporis dolor, accusantium eius aliquid non molestias.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Company;