import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'


import ListarProjetos from './ListarProjetos/ListarProjetos'


const Projects = () => {


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
