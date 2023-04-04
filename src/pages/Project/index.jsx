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
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [services, setServices] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

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
                setServices(data.services)
            })
            .catch((err) => console.log)
    }, [id])

    function editPost(project) {
        // budget validation
        if (project.budget < project.cost) {
            setMessage('O Orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(!showProjectForm)
                setMessage('Projeto atualizado!')
                setType('success')
            })
    }

    return (
        <p>{project.name}</p>
    )
}

export default Project