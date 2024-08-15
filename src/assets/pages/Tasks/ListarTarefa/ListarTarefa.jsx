import './_listarTarefa.scss';
import './_MobilelistarTarefa.scss';
import useData from '../../../hooks/useData';
import Tarefa from '../../../components/Tarefa/Tarefa'

const ListarTarefa = () => {
    const { infos, handleDelete } = useData({ api: 'Tarefa', deleteEndpoint: 'Tarefa' });

    const ExtrairHora = (tempo) => {
        const date = new Date(tempo);
        // Subtrai 4 horas
        date.setHours(date.getHours() - 3);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${hours}h${minutes}`;
    }

    const ExtrairDiaEMes = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        return `${day}/${month}`;
    }

    const handleDeleteTarefa= async (id) => {
        await handleDelete(id);
    };
    console.log(infos)

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
                            data = {tarefa.timeTrackers.length > 0 ? ExtrairDiaEMes(tarefa.timeTrackers[0].startTime) : 'Não disponível'}
                            timetrackersStart={tarefa.timeTrackers.length > 0 ? ExtrairHora(tarefa.timeTrackers[0].startTime) : ''}
                            timetrackersEnd={tarefa.timeTrackers.length > 0 ? ExtrairHora(tarefa.timeTrackers[0].endTime) : ''}
                            update={tarefa.update}
                            handleDelete={handleDeleteTarefa}
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
