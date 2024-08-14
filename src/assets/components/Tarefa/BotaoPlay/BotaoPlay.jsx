import { useState } from 'react';
import './_botaoPlay.scss';
import PropTypes from 'prop-types';

const BotaoPlay = ({ tarefaId, collaboratorID }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
        // Aqui você pode fazer uma chamada à API para iniciar/parar o rastreamento
        fetch('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net//api/TimeTracker/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startTime: new Date().toISOString(),
                tarefasId: tarefaId,
                collaboratorId: collaboratorID,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="botaoPlay">
            <label className="container" aria-label="Play/Pause Button" onClick={handleClick}>
                <input type="checkbox" id="playPause" checked={isPlaying} readOnly />
                <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" className={`play ${isPlaying ? 'hidden' : ''}`}>
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                </svg>
                <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" className={`pause ${isPlaying ? '' : 'hidden'}`}>
                    <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path>
                </svg>
            </label>
        </div>
    );
};

BotaoPlay.propTypes = {
    tarefaId: PropTypes.string.isRequired,
    collaboratorID: PropTypes.string.isRequired,
};

export default BotaoPlay;
