import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ element: Component }) => {
  const { user } = useAuth();

 
  const isAuthenticated = user && user.token;


  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
    element: PropTypes.elementType.isRequired,
  };

export default ProtectedRoute;
