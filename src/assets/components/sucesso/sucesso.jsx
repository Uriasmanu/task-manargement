import './_sucesso.scss';
import PropTypes from 'prop-types';

const Sucesso = ({ onDismiss }) => {
  return (
    <div className="sucesso">
      <div className="card">
        <button className="dismiss" type="button" onClick={onDismiss}>×</button>
        <div className="header-sucesso">
          <div className="image">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div className="content">
            <span className="title">Concluído</span>
            <p className="message">Ação realizada com sucesso!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Sucesso.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};
export default Sucesso;
