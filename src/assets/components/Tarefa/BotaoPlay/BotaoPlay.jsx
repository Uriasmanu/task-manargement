import { useContext, useEffect, useState } from 'react';
import './_botaoPlay.scss';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import useTimeTrackers from '../../../hooks/useTimeTrackers';
import { useTracking } from '../../../context/TrackingContext';
import axios from 'axios';

const BotaoPlay = ({ tarefa }) => {
    const { user } = useContext(AuthContext); // Obtém o usuário autenticado do contexto para buscar o colaborador
    const { collaborators } = useTimeTrackers();
    const { activeTask, startTracking, stopTracking } = useTracking(); // Obtém informações sobre a tarefa ativa e funções para iniciar e parar o rastreamento do hook useTracking
    const [isTracking, setIsTracking] = useState(false); // Estado para controlar se a tarefa está sendo rastreada
    const [selectedCollaboratorId, setSelectedCollaboratorId] = useState(null);

    // Obtém a hora atual no formato UTC
    const currentTimeUTC = new Date().toISOString();


    /**
    * Função para lidar com o clique do botão.
    * Inicia ou para o rastreamento da tarefa com base no estado atual.
    */
    const handleClick = async () => {
        if (!selectedCollaboratorId) {
            console.error('Nenhum colaborador selecionado');
            return;
        }

        if (!tarefa) {
            console.error('ID da tarefa não fornecido');
            return;
        }

        try {
            // Se houver uma tarefa ativa e não for a tarefa atual, finaliza a tarefa ativa
            if (activeTask && activeTask !== tarefa) {
                await axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/TimeTracker/End', {
                    endTime: currentTimeUTC,
                    tarefasId: activeTask,
                    collaboratorId: selectedCollaboratorId,
                    createdAt: currentTimeUTC,
                });
                stopTracking();
            }

            // Se a tarefa está sendo rastreada, finaliza a tarefa atual
            if (isTracking) {

                await axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/TimeTracker/End', {
                    endTime: currentTimeUTC,
                    tarefasId: tarefa,
                    collaboratorId: selectedCollaboratorId,
                    createdAt: currentTimeUTC,
                });
                stopTracking();
                setIsTracking(false);
            } else {

                // Caso contrário, inicia uma nova tarefa
                await axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/TimeTracker/start', {
                    startTime: currentTimeUTC,
                    tarefasId: tarefa,
                    collaboratorId: selectedCollaboratorId,
                    createdAt: currentTimeUTC,
                });
                startTracking(tarefa);
                setIsTracking(true);
            }
        } catch (error) {
            console.error('Erro na requisição:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        if (user && user.token) {
            try {
                jwtDecode(user.token);
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
            }
        }
    }, [user]);

    useEffect(() => {
        if (collaborators && collaborators.length > 0) {
            setSelectedCollaboratorId(collaborators[0].id);
        }
    }, [collaborators]);

    useEffect(() => {
        setIsTracking(activeTask === tarefa);
    }, [activeTask, tarefa]);

    return (
        <div className="container">
            <label className="switch">
                <input type="checkbox" checked={isTracking} onChange={handleClick} />
                <span className="slider">
                    <span className="title">
                        {isTracking ? '' : ''}
                    </span>
                    <span className="ball">
                        <span className="icon">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 18V6l8 6-8 6Z"
                                ></path>
                            </svg>
                        </span>
                    </span>
                </span>
            </label>
        </div>
    );
};

BotaoPlay.propTypes = {
    tarefa: PropTypes.string.isRequired,
};

export default BotaoPlay;
