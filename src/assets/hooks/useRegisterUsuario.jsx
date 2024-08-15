import { useState } from 'react';
import axios from 'axios';


/**
 * Hook personalizado para registrar um novo usuário.
 * Faz a requisição para a API para criar um novo usuário e gerencia erros que possam ocorrer.
 *
 * @returns {Object} Objeto contendo:
 *   - {Function} register - Função para registrar um novo usuário.
 *   - {string|null} error - Mensagem de erro, se ocorrer.
 */
const useRegisterUsuario = () => {
  const [error, setError] = useState(null);


  /**
  * Função para registrar um novo usuário.
  * Faz uma requisição POST para a API com os dados do usuário.
  *
  * @param {string} login - Nome de usuário para o novo registro.
  * @param {string} password - Senha para o novo usuário.
  * @returns {Object} - Dados retornados pela API após o registro do usuário.
  * @throws {Error} - Lança um erro se a requisição falhar.
  */
  const register = async (login, password) => {
    try {
      const response = await axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/Usuario', {
        UUIDUserName: login,
        Password: password,
      });
      return response.data;
    } catch (err) {
      console.error('Erro ao registrar:', err);
      const errorMessage = err.response?.data?.message || 'Erro desconhecido';
      setError(errorMessage);
      throw err;
    }
  };

  return { register, error };
};

export default useRegisterUsuario;
