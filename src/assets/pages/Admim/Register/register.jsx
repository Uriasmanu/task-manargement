import { useState, useEffect } from 'react';
import './_register.scss';

import Sucesso from '../../../components/sucesso/sucesso';
import useRegisterUsuario from '../../../hooks/useRegisterUsuario';

/**
 * Componente de registro de usuário.
 * Permite que um novo usuário se registre com login e senha,
 * e exibe mensagens de sucesso ou erro com base na resposta.
 */

const Register = () => {
  const { register, error } = useRegisterUsuario();

  // Estados para armazenar os dados do formulário e mensagens de status
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(false);


  /**
   * Manipulador de envio do formulário.
   * Impede o comportamento padrão do formulário e tenta registrar o usuário.
   * Exibe uma mensagem de sucesso se o registro for bem-sucedido ou uma mensagem de erro em caso contrário.
   * 
   * @param {Event} event - O evento de submissão do formulário.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(login, password);
      setSuccess(true);
    } catch {
      setShowError(true);
    }
  };

  const handleDismiss = () => {
    setSuccess(false);
  };

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <>
      {success ? (
        <Sucesso onDismiss={handleDismiss} />
      ) : (
        <form className="form-control" onSubmit={handleSubmit}>
          <p className="title">Registro</p>
          <div className="input-field">
            <input
              required
              className="input"
              type="text"
              placeholder="Usuário"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              required
              className="input"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">Registrar</button>
          {showError && <span className="error-message">{error}</span>}
        </form>
      )}
    </>
  );
};

export default Register;
