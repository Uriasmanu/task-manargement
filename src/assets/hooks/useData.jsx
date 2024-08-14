import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = ({ api, deleteEndpoint }) => {
    const [infos, setInfos] = useState([]);
    const [shouldFetchData, setShouldFetchData] = useState(false);

    // Função para buscar dados da API
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/${api}`);
            const data = response.data || []; 
            console.log('Dados recebidos:', data); 
            setInfos(data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [shouldFetchData]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
        if (confirmDelete) {
            try {
                await axios.delete(`https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/api/${deleteEndpoint}/Deleted/${id}`);
                setShouldFetchData(prev => !prev); 
            } catch (error) {
                console.error('Erro ao deletar item:', error);
            }
        }
    };

    return { infos, handleDelete, fetchData };
};

export default useData;
