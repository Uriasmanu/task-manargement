
import './_botaoPlay.scss';
import PropTypes from 'prop-types';
import { useTracking } from '../../../context/TrackingContext';
import axios from 'axios';

const BotaoPlay = ({ tarefa }) => {
    const { activeTask, startTracking, stopTracking } = useTracking();
    const isTracking = activeTask === tarefa;

    const handleClick = () => {
        if (isTracking) {
            stopTracking();
        } else {
            startTracking(tarefa);
            const currentTimeUTC = new Date().toISOString();
            axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/TimeTracker/start', {
                startTime: currentTimeUTC,
                tarefasId: tarefa,
                createdAt: currentTimeUTC
            }).catch(error => {
                console.error('Erro na requisição:', error.response ? error.response.data : error.message);
            });
        }
    };

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
