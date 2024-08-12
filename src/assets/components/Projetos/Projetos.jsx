import useData from '../../hooks/useData';
import './_projetos.scss';
import more from '../../imagens/more.svg';
import deleteIcon from '../../imagens/delete.svg';

const Projetos = () => {
    const { infos, handleDelete } = useData({ api: 'Project/Active', deleteEndpoint: 'Project/Deleted' });

    if (!infos) {
        return <div>Carregando...</div>;
    }
    console.log(infos);


    if (!infos) {
        return <div>Carregando...</div>;
    }

    return (
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

                            <p>{project.descricao}</p>
                            <span className="card__indicator-percentage">
                                <button className="ver-mais">Ver mais...</button>
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <p>Não há usuários cadastrados.</p>
            )}

        </div>
    );
}

export default Projetos;
