import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = ({ api, deleteEndpoint }) => {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7228/api/${api}`);
                const data = response.data.$values || [];
                setInfos(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, [api]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7228/api/${deleteEndpoint}/${id}`);
                setInfos((prevInfos) => prevInfos.filter(item => item.id !== id));
            } catch (error) {
                console.error('Erro ao deletar item:', error);
            }
        }
    };

    return { infos, handleDelete };
};

export default useData;
