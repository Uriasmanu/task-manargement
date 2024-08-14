import Header from '../../components/Header/Header';
import "./_dashbord.scss";
import "./_dashbordMobile.scss";
import done from '../../imagens/gostar.png';
import relogio from '../../imagens/relogio.png';
import aumentar from '../../imagens/aumentar.png';
import Dia from '../../components/Dia';
import Usuario from '../../components/Usuario/Usuario';
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        if (user && user.token) {
            try {
                const decodedToken = jwtDecode(user.token); 
                setPayload(decodedToken); 
                setLoading(false); 
                
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
                setLoading(false);
            }
        } else {
            setLoading(false); 
        }
    }, [user]);

    if (loading) {
        return <p>Carregando...</p>; 
    }

    if (!user) {
        window.location.reload()
    }

    return (
        
        <div className="container-dashboard">
            <div className='header'>
            <Header />
            </div>
            <div className='main'>
                <div className='apresentacao'>
                    <div className='chamada'>
                        <h2>Olá,  {payload ? payload.login : 'Carregando...'} </h2>
                        <p>Rastreie o progresso do projeto aqui. Você está quase alcançando um objetivo</p>
                    </div>
                    <Dia />
                </div>

                <div className="container-indicadores">
                    <div className="indicadores">
                        <img src={done} alt="" />
                        <div>
                            <p>Finalizados</p>
                            <p>tempo</p>
                        </div>
                    </div>
                    <div className="indicadores">
                        <img src={relogio} alt="" />
                        <div>
                            <p>Progresso</p>
                            <p>tempo</p>
                        </div>
                    </div>
                    <div className="indicadores">
                        <img src={aumentar} alt="" />
                        <div>
                            <p>Eficiencia</p>
                            <p>tempo</p>
                        </div>
                    </div>
                </div>

                <div className="card-tempo">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-top">
                                <span className="card-title">
                                    <img src={relogio} alt="" />
                                </span>
                                <h3>Tempo Gasto hoje.</h3>
                            </div>
                        </div>
                        <p>1h30</p>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div className="card-top">
                                <span className="card-title">
                                    <img src={relogio} alt="" />
                                </span>
                                <h3>Tempo Gasto este mês.</h3>
                            </div>
                        </div>
                        <p>1h30</p>
                    </div>
                </div>

                <div className='resumo-tarefas'>
                    <div className='cabecalho'>
                        <h4>Tarefas atuais</h4>
                        <p>Tempo Total</p>
                    </div>
                    
                
                </div>
            </div>


        </div>
    );
}

export default Dashboard;
