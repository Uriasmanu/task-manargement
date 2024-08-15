import { useState } from "react";
import Header from "../../components/Header/Header";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import ListarProjetos from './ListarProjetos/ListarProjetos';
import './_projects.scss';
import './_Mobileprojects.scss';
import Sucesso from "../../components/sucesso/sucesso";
import ProjectForm from "./ProjectForm/ProjectForm";

/**
 * Componente para gerenciar projetos.
 * Permite alternar entre diferentes visões (registro e lista) e controlar a visibilidade do dashboard.
 */
const Projects = () => {
    const [success, setSuccess] = useState(false);


    // Estado para controlar a visão atual (registro ou lista de usuários)
    const [view, setView] = useState('lista');


    const handleDismiss = () => {
        setSuccess(false);
    };

    const handleListUsers = () => {
        setView('lista');
    };

    const handleRegister = () => {
        setView('register');
    };
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);

    // Se o dashboard estiver visível, será ocultado e vice-versa.
    const toggleVisibility = () => {
        setIsDashboardVisible(prevState => !prevState);
    };

    return (
        <div className="container-projetos">
            <div className="topo">
                <div className="mobile">
                    <MenuMobile onClick={toggleVisibility} />
                </div>
            </div>
            <div className={`header ${isDashboardVisible ? '' : 'visible'}`}>
                <Header />
            </div>
            <div className={`main ${isDashboardVisible ? 'visible' : 'hidden'}`}>
                <div className="container-button">
                    <button className="button" onClick={handleListUsers}>
                        ─ Listar todos os Projetos
                    </button>
                    <button className="button" onClick={handleRegister}>
                        ─ Registre um novo Projetos
                    </button>
                </div>
                {view === 'lista' ? (
                    <ListarProjetos />
                ) : (
                    <>
                        {success ? (
                            <Sucesso onDismiss={handleDismiss} />
                        ) : (
                            <ProjectForm setSuccess={setSuccess} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Projects;
