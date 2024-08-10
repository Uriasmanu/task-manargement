import axios from 'axios';

const API_URL = 'https://localhost:7017/api/User';

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      userName: username,
      password: password
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // Erros de resposta da API
      throw new Error(error.response.data.message || 'Erro ao registrar o usuário.');
    } else {
      // Outros erros
      throw new Error('Erro ao conectar com a API.');
    }
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      userName: username,
      password: password
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // Erros de resposta da API
      throw new Error(error.response.data.message || 'Usuário ou senha inválidos.');
    } else {
      // Outros erros
      throw new Error('Erro ao conectar com a API.');
    }
  }
};
