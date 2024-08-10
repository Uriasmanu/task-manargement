import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Cria o contexto
const LoginContext = createContext();

// Cria um hook para usar o contexto
export const useLoginContext = () => useContext(LoginContext);

// Componente Provider
export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <LoginContext.Provider value={{ isLogin, toggleView }}>
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
