import axios from "axios";
import { useState } from "react";


/**
 * Hook personalizado para gerenciar tarefas.
 * Fornece uma função para registrar novas tarefas e lida com erros.
 *
 * @returns {Object} Objeto contendo:
 *   - {Function} registrarTarefa - Função para registrar uma nova tarefa.
 *   - {string|null} error - Mensagem de erro, se ocorrer.
 */
const useTasks = () => {
    const [error, setError] = useState(null);


    /**
   * Função para registrar uma nova tarefa.
   * Faz uma requisição POST para a API com os dados da tarefa.
   *
   * @param {string} nome - Nome da tarefa.
   * @param {string} descritiva - Descrição detalhada da tarefa.
   * @param {string} projetoId - ID do projeto ao qual a tarefa está associada.
   * @returns {Object} - Dados retornados pela API após o registro da tarefa.
   * @throws {Error} - Lança um erro se a requisição falhar.
   */

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
