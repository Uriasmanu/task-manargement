import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'

import more from '../../imagens/more.svg';
import mais from '../../imagens/stat_minus.svg';
import useData from '../../hooks/useData';
import Tarefa from "../../components/Tarefa/Tarefa";
import { useState } from "react";
import BotaoDelete from "../../components/BotaoDelete/BotaoDelete";

const Projects = () => {
    const { infos, handleDelete } = useData({ api: 'Project/Active', deleteEndpoint: 'Project/Deleted' });
    const [visibleTasks, setVisibleTasks] = useState({});

    if (!infos) {
        return <div>Carregando...</div>;

    };

    console.log(infos)

    const VerTarefas = (projectId) => {
        setVisibleTasks((prevState) => ({
            ...prevState,
            [projectId]: !prevState[projectId],
        }));

    };

    return (
        <div className="container-projetos">
            <Header />
            <main>
                <h2>Lista de Projetos</h2>

                <div className='container-projeto'>
                    {infos.length > 0 ? (
                        infos.map((project) => (
                            <div key={project.id} className="card">
                                <div className="card__wrapper">
                                    <div className="card___wrapper-acounts">
                                        <div className="card__score">
                                            <p>2 {/*quantidade de colaboradores*/}</p>
                                        </div>
                                    </div>
                                    <div className='controles'>
                                        <BotaoDelete
                                            handleDelete={handleDelete}
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

                                    <button className="ver-mais" onClick={() => VerTarefas(project.id)}>Tasks <img src={mais} alt="icone de seta para baixp" /></button>
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
            </main>
            <Usuario />
        </div>
    )
}

export default Projects;
