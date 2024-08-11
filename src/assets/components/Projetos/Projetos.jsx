import useData from '../../hooks/useData';
import './_projetos.scss';
import more from '../../imagens/more.svg';
import deleteIcon from '../../imagens/delete.svg';

const Projetos = () => {
    const { infos, handleDelete } = useData({ api: 'Project', deleteEndpoint: 'Project' });


    if (!infos) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='container-projeto'>
            <div className="card">
                <div className="card__wrapper">
                    <div className="card___wrapper-acounts">
                        <div className="card__score">
                            +{infos.colaboradores} colaboradores
                        </div>
                    </div>
                    <div className='controles'>
                    <button onClick={() => handleDelete(infos.id)}>
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
                    {infos.name} (nome do projeto)
                </div>
                <div className="card__indicator">
                    <span className="card__indicator-amount">
                        {infos.tarefas} tarefas
                    </span> / 
                    <span className="card__indicator-percentage">
                       
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
