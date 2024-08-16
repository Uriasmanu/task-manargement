import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook personalizado para buscar e calcular relatórios de tempo de tarefas.
 * Faz a requisição para a API, calcula o tempo total diário e mensal das tarefas,
 * e gerencia os estados de carregamento e erro.
 *
 * @param {string} id - ID da tarefa para filtrar (opcional).
 * @returns {Object} Objeto contendo:
 *   - {Array} data - Dados das tarefas retornados pela API.
 *   - {boolean} loading - Indica se os dados estão sendo carregados.
 *   - {Object|null} error - Contém o erro se ocorrer durante a requisição.
 *   - {number} dailyTime - Tempo total das tarefas do dia atual em horas.
 *   - {number} monthlyTime - Tempo total das tarefas do mês atual em horas.
 */
const useRelatorio = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dailyTime, setDailyTime] = useState(0);
  const [monthlyTime, setMonthlyTime] = useState(0);
  
  const baseUrl = 'https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/TimeTracker';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Ajusta a URL se o id for fornecido
        const requestUrl = id ? `${baseUrl}/${id}` : baseUrl;
        const response = await axios.get(requestUrl);
        const tasks = response.data;

        // Função para calcular o tempo total de uma lista de tarefas
        const calculateTotalTime = (tasks) => {
          return tasks.reduce((total, task) => {
            if (task.startTime && task.endTime) {
              const start = new Date(task.startTime);
              const end = new Date(task.endTime);
              const duration = (end - start) / 1000 / 60 / 60; // Duration in hours
              return total + duration;
            }
            return total;
          }, 0);
        };

        // Obtém a data atual e o início do mês atual
        const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
        const startOfMonth = today.slice(0, 7); // YYYY-MM

        // Filtra tarefas do dia atual e do mês atual
        const dailyTasks = tasks.filter(task => task.startTime.startsWith(today) && task.endTime);
        const monthlyTasks = tasks.filter(task => task.startTime.startsWith(startOfMonth) && task.endTime);

        // Calcula o tempo total diário e mensal e atualiza os estados correspondentes
        setDailyTime(calculateTotalTime(dailyTasks));
        setMonthlyTime(calculateTotalTime(monthlyTasks));
        setData(tasks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error, dailyTime, monthlyTime };
};

export default useRelatorio;
