import { useState } from "react";
import Header from "../../components/Header/Header";
import './_admim.scss';
import Register from './Register/register';
import ListarUsers from "./ListarUsers/ListarUsers";
import Sucesso from "../../components/sucesso/sucesso";


const Admim = () => {
    const [success, setSuccess] = useState(false);
    const [view, setView] = useState('register'); 

    const handleDismiss = () => {
        setSuccess(false);
    };

    const handleListUsers = () => {
        setView('list');
    };

    const handleRegister = () => {
        setView('register');
    };

    return (
        <div className="container-Adim">
            <Header />
            <main>
                <div className="container-button">
                    <button className="button" onClick={handleListUsers}>
                        ─ Listar todos Usuários
                    </button>
                    <button className="button" onClick={handleRegister}>
                        ─ Registre um novo usuário
                    </button>
                </div>
                {view === 'list' ? (
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
            </main>
        </div>
    );
};

export default Admim;
