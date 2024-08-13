import axios from "axios";
import { useState } from "react"

const useTask = () => {
    const [error, setError] = useState(null);

    const regristrarTarefa = async (nome, descritiva, projetoId) => {
        try {
            const response = await axios.post('https://localhost:7228/api/Tarefa', {

                Name: nome,
                Descritiva: descritiva,
                ProjetoId: projetoId

            });
            return response.data;
        } catch (err) {
            console.error('Erro ao registrar:', err);
            const errorMessage = err.response?.data?.message || 'Erro desconhecido';
            setError(errorMessage);
            throw err;
        }
    };
    return { regristrarTarefa, error };
};

export default useTask;