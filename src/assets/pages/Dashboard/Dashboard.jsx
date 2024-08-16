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
import useTimeTrackers from '../../hooks/useTimeTrackers';

/**
 * Componente que exibe dados do relatório e gerencia a visibilidade do dashboard.
 * Utiliza contexto de autenticação e hook personalizado para relatar dados.
 */

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);
    const [showContent, setShowContent] = useState(false); // Novo estado para controle do atraso
    const [showLoadingText, setShowLoadingText] = useState(true); // Novo estado para controle do texto de carregamento
    const { collaborators } = useTimeTrackers();
    const [userTime, setUserTime] = useState(null);
  
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
        if (payload && collaborators) {
            // Verifica se existe um colaborador com o nome correspondente ao login em payload
            const foundCollaborator = collaborators.find(collaborator => collaborator.name === payload.login);
            
            if (foundCollaborator) {
                // Se encontrado, define o userTime com o ID do colaborador encontrado
                setUserTime(foundCollaborator.id);
            } else {
                // Se não encontrado, loga um erro ou execute outra ação
                console.error('Erro: Colaborador não encontrado.');
            }
        }
    }, [payload, collaborators]);

    const { loading: relatorioLoading, error, dailyTime, monthlyTime } = useRelatorio(userTime);

    useEffect(() => {
        if (!loading && !relatorioLoading) {
            // Define o tempo de espera para mostrar o conteúdo
            const timer = setTimeout(() => {
                setShowLoadingText(false); // Oculta o texto de carregamento
                setShowContent(true); // Mostra o conteúdo
            }, 3000);
            return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
        }
    }, [loading, relatorioLoading]);

    if (loading || relatorioLoading || showLoadingText) {
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
    const formatoTempo = (horas) => {
        const totalMinutos = Math.round(horas * 60);
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
                {showContent && ( // Exibe o conteúdo somente após o atraso
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
