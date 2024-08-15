import { useState } from 'react';
import axios from 'axios';


/**
 * Hook personalizado para autenticação do usuário.
 * Fornece funções para login, logout e gerencia o estado do usuário.
 *
 * @returns {Object} Objeto contendo:
 *   - {Object|null} user - Informações do usuário logado ou null se não estiver logado.
 *   - {string|null} error - Mensagem de erro se ocorrer, ou null se não houver erro.
 *   - {Function} login - Função para autenticar o usuário.
 *   - {Function} logout - Função para deslogar o usuário.
 */
const useAuth = () => {
  const [user, setUser] = useState(() => {

    // Estado para armazenar informações do usuário logado, inicializado com o token do localStorage
    const token = localStorage.getItem('authToken');
    return token ? { token } : null;
  });
  const [error, setError] = useState(null);


  /**
 * Função para realizar o login do usuário.
 * Faz uma requisição POST para autenticar o usuário e armazena o token no localStorage.
 *
 * @param {string} login - Nome de usuário ou e-mail.
 * @param {string} password - Senha do usuário.
 * @returns {boolean} Retorna true se o login for bem-sucedido, caso contrário retorna false.
 */
  const login = async (login, password) => {
    try {
      const response = await axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/conta/login', {
        Login: login,
        Password: password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        setUser({ login, token });
        return true;
      }
    } catch (err) {
      setError(err.response ? translateError(err.response.data.message) : 'Erro ao realizar login.');
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const translateError = (message) => {
    switch (message) {
      case 'Invalid username or password.':
        return 'Nome de usuário ou senha inválidos.';
      default:
        return message;
    }
  };

  return { user, error, login, logout };
};

export default useAuth;
