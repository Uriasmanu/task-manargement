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

/**
 * Componente que exibe dados do relatório e gerencia a visibilidade do dashboard.
 * Utiliza contexto de autenticação e hook personalizado para relatar dados.
 */

const Dashboard = () => {
    // Obtém o usuário do contexto de autenticação
    const { user } = useContext(AuthContext);

    // Estados para armazenar o payload do token, estado de carregamento e visibilidade do dashboard
    const [payload, setPayload] = useState(null); // Armazena o payload decodificado do token
    const [loading, setLoading] = useState(true);
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);
    const { data, loading: relatorioLoading, error, dailyTime, monthlyTime } = useRelatorio();

    /**
     * Efeito colateral para decodificar o token JWT e definir o payload.
     * Executa quando o usuário muda.
     */
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

    /**
     * Efeito colateral para recarregar a página se o usuário não estiver autenticado.
     * Executa quando o usuário muda.
     */
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

    /**
     * Alterna a visibilidade do dashboard.
     * Se o dashboard estiver visível, será ocultado e vice-versa.
     */
    const toggleVisibility = () => {
        setIsDashboardVisible(prevState => !prevState);
    };

    // Função para formatar o tempo em horas e minutos
    const formatoTempo = (houras) => {
        const totalMinutos = Math.round(houras * 60);
        const hoursPart = Math.floor(totalMinutos / 60);
        const minutesPart = totalMinutos % 60;
        return `${String(hoursPart).padStart(2, '0')}h${String(minutesPart).padStart(2, '0')}`;
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
                        <p>{formatoTempo(dailyTime)}</p>
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
                        <p>{formatoTempo(monthlyTime)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
