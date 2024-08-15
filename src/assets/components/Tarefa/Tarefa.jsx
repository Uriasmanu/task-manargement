import './_task.scss';
import './_Mobiletask.scss';
import PropTypes from 'prop-types';
import tarefa from '../../imagens/splitscreen.svg';
import BotaoDelete from '../BotaoDelete/BotaoDelete';
import useData from '../../hooks/useData';
import BotaoPlay from './BotaoPlay/BotaoPlay';

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


const Tarefa = ({ id, name, collaborator, status, timetrackersStart, timetrackersEnd, update, data }) => {
    const { className, text } = TransformStatus(status);
    const { infos, handleDelete } = useData({ api: 'Tarefa', deleteEndpoint: 'Tarefa' });

    console.log(infos)
    return (
        <div className="cards-tarefas">
            <div className='informa'>
                <div className="container">
                    <img src={tarefa} alt="icone-tarefa" />
                    <p>{name}</p>

                    <div className={`status-ind ${className}`} data-status={text}></div>

                    <p>{update || ""}</p>
                </div>


                {collaborator ? (
                    <p>{collaborator.name}</p>
                ) : (
                    <p></p>
                )}
                <div className='console'>
                <BotaoPlay tarefa={id} />
                   
                    <BotaoDelete
                        handleDelete={() => handleDelete(id)}
                        objectId={id}
                    />
                </div>
            </div>
            <div className="timer">
                <p>dia: {data}</p>
                <div>
                    <p>{timetrackersStart != null ? timetrackersStart : ""}</p>
                    <p>|</p>
                    <p>{timetrackersEnd != null ? timetrackersEnd : ""}</p>
                </div>
            </div>
        </div>
    );
};


Tarefa.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    collaborator: PropTypes.shape({
        name: PropTypes.string,

    }),
    status: PropTypes.number.isRequired,
    timetrackersStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    timetrackersEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    update: PropTypes.string,
};

export default Tarefa;
