import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook personalizado para gerenciar colaboradores e suas informações.
 * Faz a requisição de colaboradores e fornece métodos para verificar a presença de um colaborador.
 *
 * @returns {Object} Objeto contendo:
 *   - {Array} collaborators - Lista de colaboradores carregados.
 *   - {boolean} loading - Indica se os dados estão sendo carregados.
 *   - {Object|null} error - Contém o erro se ocorrer durante a requisição.
 *   - {Function} isCollaborator - Função para verificar se um colaborador com um determinado nome existe.
 */
const useTimeTrackers = () => {
  const [collaborators, setCollaborators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Função para buscar colaboradores da API e atualizar o estado.
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
