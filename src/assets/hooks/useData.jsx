import { useState, useEffect } from 'react';
import axios from 'axios';


/**
 * Hook personalizado para buscar dados e manipular a exclusão de itens.
 * Faz a requisição para a API para buscar dados e permitir a exclusão de itens.
 *
 * @param {Object} params - Parâmetros para o hook.
 * @param {string} params.api - Endpoint da API para buscar os dados.
 * @param {string} params.deleteEndpoint - Endpoint da API para deletar um item.
 * @returns {Object} Objeto contendo:
 *   - {Array} infos - Dados retornados pela API.
 *   - {Function} handleDelete - Função para deletar um item.
 *   - {Function} fetchData - Função para buscar dados da API.
 */
const useData = ({ api, deleteEndpoint }) => {
    const [infos, setInfos] = useState([]);
    const [shouldFetchData, setShouldFetchData] = useState(false);

    /**
    * Função para buscar dados da API.
    * Faz uma requisição GET para o endpoint fornecido e atualiza o estado com os dados recebidos.
    */
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/${api}`);
            const data = response.data || [];

            setInfos(data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [shouldFetchData]);

    /**
     * Função para deletar um item.
     * Solicita confirmação do usuário antes de enviar a requisição DELETE.
     *
     * @param {number|string} id - ID do item a ser deletado.
     */
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
        if (confirmDelete) {
            try {
                const url = `https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/${deleteEndpoint}/${id}`;
                await axios.delete(url);
                setShouldFetchData(prev => !prev);
                window.location.reload();

            } catch (error) {
                console.error('Erro ao deletar item:', error);
            }
        }
    };

    return { infos, handleDelete, fetchData };
};

export default useData;
