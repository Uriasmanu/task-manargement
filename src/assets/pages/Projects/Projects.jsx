import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'
import Projetos from "../../components/Projetos/Projetos";

const Projects = () => {


    return (
        <div className="container-projetos">
            <Header />
            <main>
                <h2>Lista de Projetos</h2>

                <div className='container-projeto'>
                <Projetos/>
                </div>
            </main>
            <Usuario />
        </div>
    )
}

export default Projects;
