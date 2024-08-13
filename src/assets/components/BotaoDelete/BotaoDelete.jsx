
import PropTypes from 'prop-types';
import './_botaoDelete.scss';
import deleteIcon from '../../imagens/delete.svg';

const BotaoDelete = ({ objectId, handleDelete }) => {
    const handleClick = () => {
        if (objectId) {
            handleDelete(objectId);
        }
    };

    return (
        <button className="botao-delete" onClick={handleClick}>
            <img src={deleteIcon} alt="ícone de deletar" />
        </button>
    );
};

BotaoDelete.propTypes = {
    objectId: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default BotaoDelete;
