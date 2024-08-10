import Header from '../../components/Header/Header';
import "./_dashbord.scss"

import done from '../../imagens/gostar.png';
import relogio from '../../imagens/relogio.png';
import aumentar from '../../imagens/aumentar.png';

const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <Header />
            <div className='main'>
                <div className='apresentacao'>
                    <div className='chamada'>
                        <h2>Olá, (user)</h2>
                        <p>Rastreie o progresso do projeto aqui. Você está quase alcançando um objetivo</p>
                    </div>
                    <p>08 agost 2024</p>
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
                    <div class="card">
                        <div class="card-content">
                            <div class="card-top">
                                <span class="card-title">01.</span>
                                <p>Lightning.</p>
                            </div>
                            <div class="card-bottom">
                                <p>Hover Me?</p>
                                <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>
                            </div>
                        </div>
                        <div class="card-image">
                            <svg width="48" viewBox="0 -960 960 960" height="48" xmlns="http://www.w3.org/2000/svg"><path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z"></path></svg>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content">
                            <div class="card-top">
                                <span class="card-title">01.</span>
                                <p>Lightning.</p>
                            </div>
                            <div class="card-bottom">
                                <p>Hover Me?</p>
                                <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>
                            </div>
                        </div>
                        <div class="card-image">
                            <svg width="48" viewBox="0 -960 960 960" height="48" xmlns="http://www.w3.org/2000/svg"><path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z"></path></svg>
                        </div>
                    </div>
                </div>


                <div className='resumo-tarefas'>
                    <div className='cabecalho'>
                        <h4>Tarefas atuais</h4>
                        <p>progresso 30%</p>
                        <div>
                            <p>todos</p>
                            <img src="" alt="filtro" />
                        </div>
                    </div>


                    <div className="cards-tarefas">

                        <div className="container">
                            <div className="left">

                            </div>
                            <img src="" alt="icone-tarefa" />
                            <p>texto</p>

                            <div className="status-ind"></div>
                            <p>status</p>
                        </div>
                        <p>tempo gasto</p>

                        <button>
                            <img src="" alt="play" />
                        </button>
                        <button>
                            <img src="" alt="mais" />
                        </button>

                    </div>

                    <div className="cards-tarefas">

                        <div className="container">
                            <div className="left">

                            </div>
                            <img src="" alt="icone-tarefa" />
                            <p>texto</p>

                            <div className="status-ind"></div>
                            <p>status</p>
                        </div>
                        <p>tempo gasto</p>

                        <button>
                            <img src="" alt="play" />
                        </button>
                        <button>
                            <img src="" alt="mais" />
                        </button>

                    </div>

                    <div className="cards-tarefas">

                        <div className="container">
                            <div className="left">

                            </div>
                            <img src="" alt="icone-tarefa" />
                            <p>texto</p>

                            <div className="status-ind"></div>
                            <p>status</p>
                        </div>
                        <p>tempo gasto</p>

                        <button>
                            <img src="" alt="play" />
                        </button>
                        <button>
                            <img src="" alt="mais" />
                        </button>

                    </div>
                </div>
            </div>

            <div className="usuario">
                imagem
                nome
                <div>
                    <p>Projetos</p>
                    todos
                    <div className="cards-projetos">
                        titulo do projeto
                        tasks do projeto
                    </div>
                    <div className="cards-projetos"></div>
                    <div className="cards-projetos"></div>
                </div>
            </div>

        </div >
    )
}

export default Dashboard;