import { useContext, useEffect, useState } from 'react';
import './_botaoPlay.scss';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import useTimeTrackers from '../../../hooks/useTimeTrackers';
import axios from 'axios';

const BotaoPlay = ({ tarefa }) => {
    const [payload, setPayload] = useState(null);
    const { user } = useContext(AuthContext);
    const { collaborators } = useTimeTrackers();
    const [isTracking, setIsTracking] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [selectedCollaboratorId, setSelectedCollaboratorId] = useState(null); 
    
    const handleClick = () => {
        const currentTime = new Date().toISOString();
        setStartTime(currentTime);
        setIsTracking(!isTracking);

        axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/TimeTracker/start', {
            startTime: currentTime,
            tarefasId: tarefa,
            collaboratorId: selectedCollaboratorId, // Use o colaborador selecionado
            createdAt: currentTime
        })
        .then(response => {
            console.log('Requisição bem-sucedida:', response.data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    };

    useEffect(() => {
        if (user && user.token) {
            try {
                const decodedToken = jwtDecode(user.token);
                setPayload(decodedToken);
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
            }
        }
    }, [user]);

    useEffect(() => {
        if (collaborators) {
            // Defina o ID do primeiro colaborador ou o ID desejado
            if (collaborators.length > 0) {
                setSelectedCollaboratorId(collaborators[0].id);
            }
        }
    }, [collaborators]);

    return (
        <div className="container">
            {collaborators && collaborators.map(collaborator => (
                <div 
                    key={collaborator.id} 
                    onClick={() => setSelectedCollaboratorId(collaborator.id)} // Atualize o ID do colaborador selecionado ao clicar
                    className={selectedCollaboratorId === collaborator.id ? 'selected' : ''}
                >
                    {collaborator.id}
                </div>
            ))}
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
    collaboratorID: PropTypes.string,
};

export default BotaoPlay;
