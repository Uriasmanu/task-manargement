import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useData = ({ api, deleteEndpoint }) => {
    const [infos, setInfos] = useState([]);
    const [shouldFetchData, setShouldFetchData] = useState(false); // Estado para controlar a busca de dados após exclusão

    // Função para buscar dados da API
    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/${api}`);
            const data = response.data.$values || [];
            setInfos(data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }, [api]);

    
    useEffect(() => {
        fetchData();
    }, [fetchData, shouldFetchData]);

    // Função para deletar um item
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
        if (confirmDelete) {
            try {
                await axios.delete(`https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/${deleteEndpoint}/${id}`);
                setShouldFetchData(prev => !prev); // Alterna a flag para acionar a busca de dados no useEffect
                window.location.reload()
            } catch (error) {
                console.error('Erro ao deletar item:', error);
            }
        }
    };

    return { infos, handleDelete, fetchData };
};

export default useData;
