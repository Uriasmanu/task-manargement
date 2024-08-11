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
                                <button>
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
