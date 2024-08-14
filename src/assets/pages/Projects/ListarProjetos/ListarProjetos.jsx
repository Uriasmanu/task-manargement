
import './_listarProjetos.scss'

import more from '../../../imagens/more.svg';
import mais from '../../../imagens/stat_minus.svg';
import { useState, useEffect } from "react";
import useData from '../../../hooks/useData';
import BotaoDelete from '../../../components/BotaoDelete/BotaoDelete';
import Tarefa from '../../../components/Tarefa/Tarefa';

const Projects = () => {
    const { infos, handleDelete, fetchData } = useData({ api: 'Project/Active', deleteEndpoint: 'Project/Deleted' });
    const [visibleTasks, setVisibleTasks] = useState({});

    useEffect(() => {
        fetchData(); // Atualiza a lista de projetos e tarefas
    }, [fetchData]);

    const VerTarefas = (projectId) => {
        setVisibleTasks((prevState) => ({
            ...prevState,
            [projectId]: !prevState[projectId],
        }));
    };

    console.log(infos)

    const handleDeleteProject = async (id) => {
        await handleDelete(id);
        fetchData(); // Atualiza a lista de projetos após a exclusão
    };

    if (!infos) {
        return <div>Carregando...</div>;
    }

    return (
        <div >

            <h2>Lista de Projetos</h2>

            <div className='container-lista-projeto'>
                {infos.length > 0 ? (
                    infos.map((project) => (
                        <div key={project.id} className="card">
                            <div className="card__wrapper">
                                <div className="card___wrapper-acounts">
                                    <div className="card__score">
                                        {project.tarefas && project.tarefas.$values && project.tarefas.$values.length > 0 ? (
                                            project.tarefas.$values.map((tarefa) => (
                                                <p key={tarefa.id}>
                                                    {tarefa.collaborator ? tarefa.collaborator.length : 0}
                                                </p>

                                            ))
                                        ) : (
                                            <p>0</p>
                                        )}
                                    </div>
                                </div>
                                <div className='controles'>
                                    <BotaoDelete
                                        handleDelete={() => handleDeleteProject(project.id)}
                                        objectId={project.id}
                                    />
                                    <div className="card__menu">
                                        <button>
                                            <img src={more} alt="mais" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card__title">
                                {project.name}
                            </div>
                            <div className="card__indicator">
                                <p>{project.descricao}</p>
                                <button className="ver-mais" onClick={() => VerTarefas(project.id)}>
                                    Tasks <img src={mais} alt="icone de seta para baixo" />
                                </button>
                                {visibleTasks[project.id] && (
                                    <div className="lista-de-tarefas">
                                        {project.tarefas && project.tarefas.$values && project.tarefas.$values.length > 0 ? (
                                            project.tarefas.$values.map((tarefa) => (
                                                <Tarefa
                                                    key={tarefa.id}
                                                    id={tarefa.id}
                                                    name={tarefa.name}
                                                    collaborator={tarefa.collaborator}
                                                    status={tarefa.status}
                                                    timetrackers={tarefa.timetrackers}
                                                    update={tarefa.updatedAt}
                                                />
                                            ))
                                        ) : (
                                            <p>Não há tarefas para mostrar</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Não há projetos cadastrados.</p>
                )}
            </div>

        </div>
    );
};

export default Projects;
