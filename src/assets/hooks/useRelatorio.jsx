import { useState, useEffect } from 'react';
import axios from 'axios';

const useRelatorio = (url = 'https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/TimeTracker') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dailyTime, setDailyTime] = useState(0);
  const [monthlyTime, setMonthlyTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const tasks = response.data;
        setData(tasks);

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

        const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
        const startOfMonth = today.slice(0, 7); // YYYY-MM

        const dailyTasks = tasks.filter(task => task.startTime.startsWith(today) && task.endTime);
        const monthlyTasks = tasks.filter(task => task.startTime.startsWith(startOfMonth) && task.endTime);

        setDailyTime(calculateTotalTime(dailyTasks));
        setMonthlyTime(calculateTotalTime(monthlyTasks));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, dailyTime, monthlyTime };
};

export default useRelatorio;
