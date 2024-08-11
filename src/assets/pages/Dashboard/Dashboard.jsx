import Header from '../../components/Header/Header';
import "./_dashbord.scss"


import done from '../../imagens/gostar.png';
import relogio from '../../imagens/relogio.png';
import aumentar from '../../imagens/aumentar.png';
import usuario from '../../imagens/usuario.png';
import Projetos from '../../components/Projetos/Projetos';
import Dia from '../../components/Dia';
import Tasks from '../Tasks/Tasks';
import Tarefa from '../../components/Tasks/Tasks';


const Dashboard = () => {

    
    return (
        <div className="container-dashboard">
            <Header />
            <div className='main'>
                <div className='apresentacao'>
                    <div className='chamada'>
                        <h2>Olá, </h2>
                        <p>Rastreie o progresso do projeto aqui. Você está quase alcançando um objetivo</p>
                    </div>
                    <Dia/>
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
                        <p>progresso 30%</p>
                    </div>
                    
                  <Tarefa/>

                </div>
            </div>

            <div className="usuario">
                <div className='card-imagem-user'>
                    <img src={usuario} alt="" />
                </div>

                <div className='contem-projeto'>
                    <h4>Projetos Atual</h4>
                    <div className="cards-projetos">
                        <Projetos/>

                    </div>
                    <div className="cards-projetos"></div>
                    <div className="cards-projetos"></div>
                </div>
            </div>

        </div >
    )

}

export default Dashboard;