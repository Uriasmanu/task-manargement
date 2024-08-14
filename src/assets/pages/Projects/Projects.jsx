import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'

import useData from '../../hooks/useData';

import ListarProjetos from './ListarProjetos/ListarProjetos'
import { useEffect } from "react";

const Projects = () => {
    const { infos,fetchData } = useData({ api: 'Project/Active', deleteEndpoint: 'Project/Deleted' });
  

    useEffect(() => {
        fetchData(); // Atualiza a lista de projetos e tarefas
    }, [fetchData]);

  

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
