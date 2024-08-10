import Auth from '../../components/Auth/auth';
import Register from '../../components/Register/register';
import { useLoginContext } from '../../context/LoginContext';
import './_login.scss';

const Login = () => {
  const { isLogin, toggleView } = useLoginContext();

  return (
    <div className="container-login">
      <div className='chamada'>
      <h1>Bem vindo(a) ao Task Manargement System </h1>
      <p>Organize seu tempo, conquiste seus objetivos!</p>
      </div>
      <div className="login">
      {isLogin ? <Auth toggleView={toggleView} /> : <Register toggleView={toggleView} />}
      
      </div>
    </div>
  )
}

export default Login;