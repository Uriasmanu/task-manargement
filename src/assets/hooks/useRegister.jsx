import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
  const [error, setError] = useState(null);

  const register = async (login, password) => {
    try {
      const response = await axios.post('https://localhost:7228/api/Usuario', {
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

export default useRegister;
