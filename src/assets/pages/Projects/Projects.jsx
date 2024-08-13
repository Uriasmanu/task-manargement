import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'

import more from '../../imagens/more.svg';
import mais from '../../imagens/stat_minus.svg';
import useData from '../../hooks/useData';
import Tarefa from "../../components/Tarefa/Tarefa";
import { useState, useEffect } from "react";
import BotaoDelete from "../../components/BotaoDelete/BotaoDelete";
import ListarProjetos from './ListarProjetos/ListarProjetos'

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

    const handleDeleteProject = async (id) => {
        await handleDelete(id);
        fetchData(); // Atualiza a lista de projetos após a exclusão
    };

    if (!infos) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container-projetos">
            <Header />
            <main>
                <ListarProjetos/>
            </main>
            <Usuario />
        </div>
    );
};

export default Projects;
