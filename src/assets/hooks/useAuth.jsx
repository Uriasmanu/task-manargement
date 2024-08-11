import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('authToken');
    return token ? { token } : null;
  });
  const [error, setError] = useState(null);

  const login = async (login, password) => {
    try {
      const response = await axios.post('https://localhost:7228/api/conta/login', {
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
