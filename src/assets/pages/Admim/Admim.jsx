import { useState } from "react";
import Header from "../../components/Header/Header";
import './_admim.scss';
import './_Mobileadmim.scss';

import Register from './Register/register';
import ListarUsers from "./ListarUsers/ListarUsers";
import Sucesso from "../../components/sucesso/sucesso";
import MenuMobile from "../../components/MenuMobile/MenuMobile";

/**
 * Componente de administração que permite alternar entre diferentes visualizações
 * e controlar a visibilidade de uma área do dashboard.
 */
const Admim = () => {
    const [success, setSuccess] = useState(false);
    const [view, setView] = useState('lista');


    //Manipulador para ocultar a mensagem de sucesso.
    const handleDismiss = () => {
        setSuccess(false);
    };

    const handleListUsers = () => {
        setView('lista');
    };

    const handleRegister = () => {
        setView('register');
    };

    const [isDashboardVisible, setIsDashboardVisible] = useState(true);

    const toggleVisibility = () => {
        setIsDashboardVisible(prevState => !prevState);
    };

    return (
        <div className="container-Adim">
            <div className="topo">
                <div className="mobile">
                    <MenuMobile onClick={toggleVisibility} />
                </div>
            </div>
            <div className={`header ${isDashboardVisible ? '' : 'visible'}`}>
                <Header />
            </div>
            <div className={`main ${isDashboardVisible ? 'visible' : 'hidden'}`}>
                <div className="container-button">
                    <button className="button" onClick={handleListUsers}>
                        ─ Listar todos Usuários
                    </button>
                    <button className="button" onClick={handleRegister}>
                        ─ Registre um novo usuário
                    </button>
                </div>
                {view === 'lista' ? (
                    <ListarUsers />
                ) : (
                    <>
                        {success ? (
                            <Sucesso onDismiss={handleDismiss} />
                        ) : (
                            <Register setSuccess={setSuccess} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Admim;
