
import './_listarUsers.scss';
import deleteIcon from '../../../imagens/delete.svg';
import useData from '../../../hooks/useData';

const ListarUsers = () => {
    const { infos, handleDelete } = useData({ api: 'Usuario', deleteEndpoint: 'Usuario' });

    return (
        <div className="container-listar">
            <h2>Lista de Usuários</h2>
            <div className="lista">
                {infos.length > 0 ? (
                    infos.map(usuario => (
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
