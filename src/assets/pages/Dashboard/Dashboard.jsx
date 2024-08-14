import Header from '../../components/Header/Header';
import "./_dashbord.scss";
import "./_Mobiledashbord.scss";
import done from '../../imagens/gostar.png';
import relogio from '../../imagens/relogio.png';
import aumentar from '../../imagens/aumentar.png';
import Dia from '../../components/Dia';
import Usuario from '../../components/Usuario/Usuario';
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MenuMobile from '../../components/MenuMobile/MenuMobile';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);

    useEffect(() => {
        if (user && user.token) {
            try {
                const decodedToken = jwtDecode(user.token);
                setPayload(decodedToken);
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        if (!user) {
            window.location.reload();
        }
    }, [user]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    const toggleVisibility = () => {
        setIsDashboardVisible(prevState => !prevState);
    };

    return (
        <div className="container-dashboard">
            <div className="topo">
                <div className="mobile">
                    <MenuMobile onClick={toggleVisibility} />
                </div>
            </div>
            <div className={`header ${isDashboardVisible ? '' : 'visible'}`}>
                <Header />
            </div>
            <div className={`main ${isDashboardVisible ? 'visible' : 'hidden'}`}>
                <div className='apresentacao'>
                    <div className='chamada'>
                        <h2>Olá, {payload ? payload.login : 'Carregando...'}</h2>
                        <p>Rastreie o progresso do projeto aqui. Você está quase alcançando um objetivo</p>
                    </div>
                    <Dia />
                </div>

                <div className="container-indicadores">
                    <div className="indicadores">
                        <img src={done} alt="Finalizados" />
                        <div>
                            <p>Finalizados</p>
                            <p>tempo</p>
                        </div>
                    </div>
                    <div className="indicadores">
                        <img src={relogio} alt="Progresso" />
                        <div>
                            <p>Progresso</p>
                            <p>tempo</p>
                        </div>
                    </div>
                    <div className="indicadores">
                        <img src={aumentar} alt="Eficiencia" />
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
                                    <img src={relogio} alt="Ícone de relógio" />
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
                                    <img src={relogio} alt="Ícone de relógio" />
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
