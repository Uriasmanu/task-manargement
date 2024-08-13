
import './_listarTarefa.scss';

import useData from '../../../hooks/useData';
import BotaoDelete from '../../../components/BotaoDelete/BotaoDelete';

const ListarTarefa = () => {
    const { infos, handleDelete } = useData({ api: 'Tarefa', deleteEndpoint: 'Tarefa' });

    return (
        <div className="container-listar">
            <h2>Lista de Tarefas</h2>
            <div className="lista">
                {infos.length > 0 ? (
                    infos.map(tarefa => (
                        <div key={tarefa.id} className="info">
                            <div className="info__title">
                                <p>{tarefa.id}</p>
                                <p>{tarefa.uuidUserName}</p>
                            </div>
                            <div className="info__close">
                                <BotaoDelete
                                    handleDelete={handleDelete}
                                    objectId={tarefa.id}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Não há Tarefas cadastrados.</p>
                )}
            </div>
        </div>
    );
};

export default ListarTarefa;
