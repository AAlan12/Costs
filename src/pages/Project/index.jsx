import { parse, v4 as uuidv4 } from 'uuid'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../../objects/Loading'
import Container from '../../objects/Container'
import ProjectForm from '../../components/ProjectForm'
import Message from '../../components/Message'
import ServiceCard from '../../components/ServiceCard'
import ServiceForm from '../../components/ServiceForm'


function Project() {
    
    const { id } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log)
    }, [id])

    return(
        <p>{project.name}</p>
    )
}

export default Project