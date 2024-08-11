import Header from "../../components/Header/Header";
import Projetos from "../../components/Projetos/Projetos";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'

const Projects = () => {
    return (
        <div className="container-projetos">
            <Header />
            <main>
                <Projetos />
                <Projetos />
                <Projetos />
                <Projetos />
                <Projetos />


            </main>
            <Usuario />
        </div>
    )
}

export default Projects;