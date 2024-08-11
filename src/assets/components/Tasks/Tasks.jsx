import './_task.scss'

import tarefa from '../../imagens/splitscreen.svg';
import more from '../../imagens/more.svg';
import play from '../../imagens/play.svg';



const Tarefa = () =>{
    return(
        <div className="cards-tarefas">

                        <div className="container">
                            <div className="left">

                            </div>
                            <img src={tarefa} alt="icone-tarefa" />
                            <p>texto</p>

                            <div className="status-ind"></div>
                            <p>status</p>
                        </div>
                        <p>tempo gasto</p>

                        <button>
                            <img src={play} alt="play" />
                        </button>
                        <button>
                            <img src={more} alt="mais" />
                        </button>

                    </div>
    )
}

export default Tarefa;