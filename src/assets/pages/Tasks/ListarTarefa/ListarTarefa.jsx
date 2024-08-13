
import './_listarTarefa.scss';

import useData from '../../../hooks/useData';
import BotaoDelete from '../../../components/BotaoDelete/BotaoDelete';

const ListarTarefa = () => {
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
                                <BotaoDelete
                                    handleDelete={handleDelete}
                                    objectId={usuario.id}
                                />
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

export default ListarTarefa;
