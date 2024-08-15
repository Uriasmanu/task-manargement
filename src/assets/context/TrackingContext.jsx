import PropTypes from 'prop-types';
import { createContext, useState, useContext } from 'react';

const TrackingContext = createContext();

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
