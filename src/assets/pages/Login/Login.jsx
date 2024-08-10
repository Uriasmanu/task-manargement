import Auth from '../../components/Auth/auth';
import './_login.scss';

const Login = () => {

  return (
    <div className="container-login">
      <div className='chamada'>
      <h1>Bem vindo(a) ao Task Manargement System </h1>
      <p>Organize seu tempo, conquiste seus objetivos!</p>
      </div>
      <div className="login">
      <Auth/>
      
      </div>
    </div>
  )
}

export default Login;