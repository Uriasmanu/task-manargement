import './_header.scss';
import './_Mobileheader.scss';

import icon from '../../imagens/engrenagem.png';
import logout from '../../imagens/logout.png';
import clipboard from '../../imagens/clipboard.png';
import home from '../../imagens/home.png';
import projectManagement from '../../imagens/projectManagement.png';
import adicionar from '../../imagens/adicionar.png';

import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

/**
 * Componente de cabeçalho para navegação e logout.
 * Inclui navegação entre páginas e botão de logout.
 */
const Header = () => {
    const navigate = useNavigate();
    const { logout: logoutUser } = useAuth(); 

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        logoutUser(); // Chama a função de logout
        navigate('/'); // Redireciona para a página de login após o logout
    };

    return (
        <div className="container-header">
            <div className='titulo-logo'>
                <img src={icon} alt="icone de engrenagem" />
                <h3>Tasck System Manarge</h3>
            </div>

            <div>
                <ul className='menus-container'>
                    <div className="menu-itens" onClick={() => handleNavigation('/Dashboard')}>
                        <img src={home} alt="" />
                        <li className="menus">Home</li>
                    </div>

                    <div className="menu-itens" onClick={() => handleNavigation('/Projects')}>
                        <img src={projectManagement} alt="" />
                        <li className="menus">Projetos</li>
                    </div>

                    <div className="menu-itens" onClick={() => handleNavigation('/Tasks')}>
                        <img src={clipboard} alt="" />
                        <li className="menus">Tasks</li>
                    </div>
                    
                    <div className="menu-itens" onClick={() => handleNavigation('/Admim')}>
                        <img src={adicionar} alt="" />
                        <li className="menus">Administração</li>
                    </div>
                </ul>
            </div>

            <div className="sair">
                <img src={logout} alt="icone de sair" />
                <button className='logout' onClick={handleLogout}>Sair</button>
            </div>
        </div>
    );
}

export default Header;
