import './_listarProjetos.scss';
import './_MobilelistarProjetos.scss';

import more from '../../../imagens/more.svg';
import mais from '../../../imagens/stat_minus.svg';
import { useState } from 'react';
import BotaoDelete from '../../../components/BotaoDelete/BotaoDelete';
import Tarefa from '../../../components/Tarefa/Tarefa';
import useData from '../../../hooks/useData';

const ListarProjetos = () => {
    // Hook para projetos
    const { infos: projetos, handleDelete: handleDeleteProjeto } = useData({ api: 'Project/Active', deleteEndpoint: 'Project' });
    // Hook para tarefas
    const { handleDelete: handleDeleteTarefa } = useData({ api: 'Tarefa', deleteEndpoint: 'Tarefa' });

    const [visibleTasks, setVisibleTasks] = useState({});

    const VerTarefas = (projectId) => {
        setVisibleTasks((prevState) => ({
            ...prevState,
            [projectId]: !prevState[projectId],
        }));
    };

    const handleDeletarTarefa = async (id) => {
        await handleDeleteTarefa(id);
    };

    const handleDeletarProjeto = async (id) => {
        await handleDeleteProjeto(id);
    };

    if (!projetos.length) {
        return <div>Carregando...</div>;
    }

    console.log(projetos)

    return (
        <div className='container-lista-projeto'>
            <h2>Lista de Projetos</h2>
            <div className='listar-projetos'>
                {projetos.length > 0 ? (
                    projetos.map((project) => (
                        <div key={project.id} className="card">
                            <div className="card__wrapper">
                                <div className="card___wrapper-acounts">
                                    <div className="card__score">
                                        {project.tarefas && project.tarefas.length > 0 ? (
                                            project.tarefas.map((tarefa) => (
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
                                        handleDelete={() => handleDeletarProjeto(project.id)}
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
                                        {project.tarefas && project.tarefas.length > 0 ? (
                                            project.tarefas.map((tarefa) => (
                                                <Tarefa
                                                    key={tarefa.id}
                                                    id={tarefa.id}
                                                    name={tarefa.name}
                                                    collaborator={tarefa.collaborator}
                                                    status={tarefa.status}
                                                    update={tarefa.updatedAt}
                                                    handleDelete={handleDeletarTarefa}  
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

export default ListarProjetos;
