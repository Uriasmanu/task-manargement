import PropTypes from 'prop-types';
import { createContext, useState, useContext } from 'react';

const TrackingContext = createContext();


/**
 * Provedor de contexto para rastreamento de tarefas.
 * Fornece um contexto que permite iniciar e parar o rastreamento de tarefas ativas.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {ReactNode} props.children - Elementos filhos que terão acesso ao contexto.
 * @returns {JSX.Element} - Elemento provider que envolve os componentes filhos.
 */

export const TrackingProvider = ({ children }) => {
    const [activeTask, setActiveTask] = useState(null);

    const startTracking = (taskId) => {
        setActiveTask(taskId);
    };

    const stopTracking = () => {
        setActiveTask(null);
    };

    return (
        <TrackingContext.Provider value={{ activeTask, startTracking, stopTracking }}>
            {children}
        </TrackingContext.Provider>
    );
};

TrackingProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export const useTracking = () => useContext(TrackingContext);
