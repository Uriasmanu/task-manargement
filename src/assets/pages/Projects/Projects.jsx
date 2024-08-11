import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'
import deleteIcon from '../../imagens/delete.svg'; 
import more from '../../imagens/more.svg'; 
import useData from '../../hooks/useData'; 

const Projects = () => {
    const { infos, handleDelete } = useData({ api: 'Project/Active', deleteEndpoint: 'Project/Deleted"' });

    if (!infos) {
        return <div>Carregando...</div>;
    }
    console.log(infos);


    return (
        <div className="container-projetos">
            <Header />
            <main>
                <h2>Lista de Projetos</h2>
                
                <div className='container-projeto'>
                    {infos.map((project) => (
                        <div key={project.id} className="card">
                            <div className="card__wrapper">
                                <div className="card___wrapper-acounts">
                                    <div className="card__score">
                                        +{project.colaboradores} colaboradores
                                    </div>
                                </div>
                                <div className='controles'>
                                    <button onClick={() => handleDelete(project.id)}>
                                        <img src={deleteIcon} alt="ícone de deletar" />
                                    </button>
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
                                <span className="card__indicator-amount">
                                    {project.tarefas} tarefas
                                </span>
                 
                                <span className="card__indicator-percentage">
                                    
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Usuario />
        </div>
    )
}

export default Projects;
