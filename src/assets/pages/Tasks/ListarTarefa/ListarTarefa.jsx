import './_listarTarefa.scss';
import './_MobilelistarTarefa.scss';
import useData from '../../../hooks/useData';
import Tarefa from '../../../components/Tarefa/Tarefa'

/**
 * Componente para listar tarefas.
 * Utiliza o hook `useData` para obter as tarefas e manipular a exclusão de tarefas.
 */

const ListarTarefa = () => {

    // Hook personalizado para obter as tarefas e lidar com a exclusão
    const { infos, handleDelete } = useData({ api: 'Tarefa', deleteEndpoint: 'Tarefa' });

    /**
    * Extrai e formata a hora a partir de uma string de tempo.
    * 
    * @param {string} tempo - A string representando o tempo.
    * @returns {string} - A hora formatada no formato 'HHhMM'.
    */

    const ExtrairHora = (tempo) => {
        if (!tempo) return '';

        const date = new Date(tempo);

        // Subtrai 3 horas do tempo para ajustar o fuso horário em relaçao ao Servidor
        date.setHours(date.getHours() - 3);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${hours}h${minutes}`;
    }

    /**
         * Extrai e formata o dia e o mês a partir de uma string de data e hora.
         * 
         * @param {string} dateTimeString - A string representando a data e hora.
         * @returns {string} - O dia e o mês formatados no formato 'DD/MM'.
         */
    const ExtrairDiaEMes = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        return `${day}/${month}`;
    }


    //Manipulador para excluir uma tarefa com base no seu ID.
    const handleDeleteTarefa = async (id) => {
        await handleDelete(id);
    };


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
                            data={tarefa.timeTrackers.length > 0 ? ExtrairDiaEMes(tarefa.timeTrackers[0].startTime) : 'Não disponível'}
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
