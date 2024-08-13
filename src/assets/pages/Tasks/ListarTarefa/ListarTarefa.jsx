import './_listarTarefa.scss';
import useData from '../../../hooks/useData';
import Tarefa from '../../../components/Tarefa/Tarefa'

const ListarTarefa = () => {
    const { infos, handleDelete } = useData({ api: 'Tarefa', deleteEndpoint: 'Tarefa' });

    return (
        <div className="container-listar">
            <h2>Lista de Tarefas</h2>
            <div className="lista">
                {infos.length > 0 ? (
                    infos.map(tarefa => (
                        <Tarefa
                            key={tarefa.id}
                            id={tarefa.id}
                            name={tarefa.name}
                            collaborator={tarefa.collaborator}
                            status={tarefa.status}
                            timetrackers={tarefa.timetrackers}
                            update={tarefa.update}
                            handleDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p>Não há Tarefas cadastradas.</p>
                )}
            </div>
        </div>
    );
};

export default ListarTarefa;
