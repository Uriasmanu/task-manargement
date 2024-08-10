import './_header.scss';
import icon from '../../imagens/engrenagem.png';
import logout from '../../imagens/logout.png';
import clipboard from '../../imagens/clipboard.png';
import home from '../../imagens/home.png';
import projectManagement from '../../imagens/projectManagement.png';

const Header = () => {
    return (
        <div className="container-header">
            <div className='titulo-logo'>
                <img src={icon} alt="icone de engrenagem" />
                <h3>Tasck System Manarge</h3>
            </div>
            <div>
                <ul className='menus-container'>
                    <div className="menu-itens">
                        <img src={home} alt="" />
                        <li className="menus">Home</li>
                    </div>

                    <div className="menu-itens">
                    <img src={projectManagement} alt="" />
                        <li className="menus">Projetos</li>
                    </div>

                    <div className="menu-itens">
                    <img src={clipboard} alt="" />
                        <li className="menus">Tasks</li>
                    </div>

                </ul>
            </div>

            <div className='botoes-criar'>
                <button className='task'>Criar nova Task</button>
                <button className='project'>Criar novo Projeto</button>
            </div>
            <div className="sair">
                <img src={logout} alt="icone de sair" />
                <button className='logout'>Sair</button>
            </div>
        </div>
    )
}

export default Header;