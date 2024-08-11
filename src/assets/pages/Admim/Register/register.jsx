import { useState, useEffect } from 'react';
import './_register.scss';
import useRegister from '../../../hooks/useRegister';
import Sucesso from '../sucesso/sucesso';


const Register = () => {
  const { register, error } = useRegister();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(login, password);
      setSuccess(true); // Exibir a mensagem de sucesso
    } catch {
      setShowError(true);
    }
  };

  const handleDismiss = () => {
    setSuccess(false); // Fechar a mensagem de sucesso
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
