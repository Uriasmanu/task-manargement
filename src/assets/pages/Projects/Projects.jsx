import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_projects.scss'
import deleteIcon from '../../imagens/delete.svg';
import more from '../../imagens/more.svg';
import useData from '../../hooks/useData';

const Projects = () => {
    const { infos, handleDelete } = useData({ api: 'Project/Active', deleteEndpoint: 'Project/Deleted' });

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
                                        <button className="botao-delete" onClick={() => handleDelete(project.id)}>
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

                                    <p>{project.descricao}</p>

                                    <button className="ver-mais">Ver mais...</button>

                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Não há usuários cadastrados.</p>
                    )}

                </div>
            </main>
            <Usuario />
        </div>
    )
}

export default Projects;
