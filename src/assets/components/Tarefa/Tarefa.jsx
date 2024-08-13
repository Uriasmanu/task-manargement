import './_task.scss';
import PropTypes from 'prop-types';
import tarefa from '../../imagens/splitscreen.svg';
import more from '../../imagens/more.svg';
import play from '../../imagens/play.svg';

const TransformStatus = (status) => {
    switch (status) {
        case 0:
            return { className: "inicio", text: "Aguardando início" };
        case 1:
            return { className: "andamento", text: "Em andamento" };
        case 2:
            return { className: "concluido", text: "Concluído" };
        default:
            return { className: "", text: "" };
    }
}

const Tarefa = ({ name, collaborator, status, timetrackers, update }) => {
    const { className, text } = TransformStatus(status);
    
    return (
        <div className="cards-tarefas">
            <div className="container">
                <img src={tarefa} alt="icone-tarefa" />
                <p>{name}</p>

                <div className={`status-ind ${className}`} data-status={text}></div>

                <p>{update}</p>
            </div>
            <p>{timetrackers}</p>

            {collaborator ? (
                <p>{collaborator.name}</p>
            ) : (
                <p>Sem colaborador</p>
            )}

            <button>
                <img src={play} alt="play" />
            </button>
            <button>
                <img src={more} alt="mais" />
            </button>
        </div>
    );
};

Tarefa.propTypes = {

    name: PropTypes.string.isRequired,
    collaborator: PropTypes.shape({
        name: PropTypes.string,

    }),
    status: PropTypes.number.isRequired,
    timetrackers: PropTypes.string,
    update: PropTypes.string.isRequired,
};

export default Tarefa;
