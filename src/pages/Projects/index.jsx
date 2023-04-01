import styles from './styles.module.css'
import Message from '../../components/Message';
import { useLocation } from 'react-router-dom'
import Container from '../../objects/Container';
import LinkButton from '../../objects/LinkButton';

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container>
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects;