import axios from "axios";
import { useState } from "react";

const useTasks = () => {
    const [error, setError] = useState(null);

    const registrarTarefa = async (nome, descritiva, projetoId) => {
        try {
            // Verificar os dados antes de enviar
            console.log('Enviando dados:', { Name: nome, Descritiva: descritiva, ProjetoId: projetoId });
    
            const response = await axios.post('https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/Tarefa', {
                Name: nome,
                Descritiva: descritiva,
                ProjectId: projetoId
            });
    
            console.log('Resposta da API:', response.data);
            return response.data;
        } catch (err) {
            console.error('Erro ao registrar:', err.response ? err.response.data : err.message);
            const errorMessage = err.response?.data?.message || 'Erro desconhecido';
            setError(errorMessage);
            throw err;
        }
    };
    

    return { registrarTarefa, error };
};

export default useTasks;
