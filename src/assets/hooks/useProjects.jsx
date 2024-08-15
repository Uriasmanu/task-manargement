import { useState } from 'react';
import axios from 'axios';


/**
 * Hook personalizado para criar projetos.
 * Faz a requisição para a API para criar um novo projeto e gerencia erros que possam ocorrer.
 *
 * @returns {Object} Objeto contendo:
 *   - {Function} createProject - Função para criar um novo projeto.
 *   - {string|null} error - Mensagem de erro, se ocorrer.
 */
const useProject = () => {
  const [error, setError] = useState(null);

  const createProject = async (name, descricao) => {
    try {
      const response = await axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/Project', {
        name: name,
        descricao: descricao,
      });
      return response.data;
    } catch (err) {
      console.error('Erro ao criar projeto:', err);
      const errorMessage = err.response?.data?.message || 'Erro desconhecido';
      setError(errorMessage);
      throw err;
    }
  };

  return { createProject, error };
};

export default useProject;
