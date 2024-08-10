import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const register = async (username, password) => {
    try {
      const response = await axios.post('https://localhost:7017/api/user/register', {
        userName: username,
        password: password,
      });
      setUser(response.data);
    } catch (err) {
      setError(err.response ? translateError(err.response.data.message) : 'Erro ao registrar usuário.');
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://localhost:7017/api/user/login', {
        username,
        password,
      });

      if (response.status === 200) {
        return true;
      }
    } catch (err) {
      setError(err.response ? translateError(err.response.data.message) : 'Erro ao realizar login.');
    }

    return false;
  };

  const translateError = (message) => {
    switch (message) {
      case 'Invalid username or password.':
        return 'Nome de usuário ou senha inválidos.';
      // Adicione mais casos conforme necessário
      default:
        return message;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, error, register, login, logout };
};

export default useAuth;
