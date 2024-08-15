import { createContext } from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';


/**
 * Provedor de contexto para autenticação.
 * Fornece o estado e as funções de autenticação para todos os componentes filhos.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {ReactNode} props.children - Elementos filhos que terão acesso ao contexto de autenticação.
 * @returns {JSX.Element} - Elemento provider que envolve os componentes filhos.
 */
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider };
