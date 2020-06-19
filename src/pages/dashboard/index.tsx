import React, { useState, useEffect, useContext, FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { Title ,Header, Form, Repositories, Error } from './styles'
import {FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import Logo from '../../assets/logo.svg'

interface Repository{
    full_name: string
    description: string
    owner: {
        login: string,
        avatar_url: string
    }
}

const Dashboard: React.FC = () => {

    const [inputError, setInputError] = useState('')
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>(()=> {
        const storagedRepositories = localStorage.getItem('@github_explorer:repository')

        if(storagedRepositories){
            return JSON.parse(storagedRepositories)
        }else{
            return []
        }
    })

    useEffect(()=>{
        localStorage.setItem(
            '@github_explorer:repository',
            JSON.stringify(repositories)    
        )
    },[repositories])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()

        if(!newRepo){
            setInputError('Digite autor/nome do repositŕoio')
            return
        }
        
        try{
            const response = await api.get<Repository>(`/repos/${newRepo}`)

            const repository = response.data

            const repositoryHasAlreadyBeenAdded = repositories.some((element, index, array) => {
                return element.full_name === repository.full_name
            })

            console.log(repositoryHasAlreadyBeenAdded)

            if(!repositoryHasAlreadyBeenAdded){
                setRepositories([...repositories, repository])
            }
        
            setNewRepo('')
            setInputError('')
        }catch(err){
            setInputError('Erro na busca por esse repositório')
        }
    }

    return (
        <>

            <Header>
                <img src={Logo} alt="Github Explorer"/>
                
            </Header>

            <Title>Explore Repositórios no github</Title>

            <Form 
                hasError={!!inputError} 
                onSubmit={handleAddRepository}
            >
                <input 
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
                        <img 
                            src = {repository.owner.avatar_url}
                            alt= {repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </Link>
                ))}

                

            </Repositories>

        </>
    )
}

export default Dashboard