// src/hooks/useTimeTrackers.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useTimeTrackers = () => {
  const [collaborators, setCollaborators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollaborators = async () => {
      try {
        const response = await axios.get('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/Collaborator');
        setCollaborators(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollaborators();
  }, []);

  const isCollaborator = (name) => {
    return collaborators.some(collaborator => collaborator.name === name);
  };

  return { collaborators, loading, error, isCollaborator };
};

export default useTimeTrackers;
