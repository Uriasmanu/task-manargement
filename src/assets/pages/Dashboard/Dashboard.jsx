import Header from '../../components/Header/Header';
import "./_dashbord.scss";
import "./_Mobiledashbord.scss";
import relogio from '../../imagens/relogio.png';
import Dia from '../../components/Dia';
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import useRelatorio from '../../hooks/useRelatorio';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);
    const { data, loading: relatorioLoading, error, dailyTime, monthlyTime } = useRelatorio();
console.log(data)
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

    if (loading || relatorioLoading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro ao carregar os dados.</p>;
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
                    {/* Adicione indicadores se necessário */}
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
                        <p>{dailyTime.toFixed(2)}h</p>
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
                        <p>{monthlyTime.toFixed(2)}h</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
