import { useEffect, useState } from 'react';
import axios from 'axios';
import './_listarUsers.scss';
import deleteIcon from '../../../imagens/delete.svg';

const ListarUsers = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('https://localhost:7228/api/Usuario');
                console.log('Resposta da API:', response.data); 
                const usuariosData = response.data.$values || [];
                setUsuarios(usuariosData);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        fetchUsuarios();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este usuário?');
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7228/api/Usuario/${id}`);
                // Atualiza a lista de usuários após a exclusão
                setUsuarios((prevUsuarios) => prevUsuarios.filter(usuario => usuario.id !== id));
            } catch (error) {
                console.error('Erro ao deletar usuário:', error);
            }
        }
    };

    return (
        <div className="container-listar">
            <h2>Lista de Usuários</h2>
            <div className="lista">
                {usuarios.length > 0 ? (
                    usuarios.map(usuario => (
                        <div key={usuario.id} className="info">
                            <div className="info__title">
                                <p>{usuario.id}</p>
                                <p>{usuario.uuidUserName}</p>
                            </div>
                            <div className="info__close">
                                <button onClick={() => handleDelete(usuario.id)}>
                                    <img src={deleteIcon} alt="ícone de deletar" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Não há usuários cadastrados.</p>
                )}
            </div>
        </div>
    );
};

export default ListarUsers;
