import Header from "../../components/Header/Header";
import TarefaForm from "../../components/TarefaForm/TarefaForm";
import './_tasks.scss'
import ListarTarefa from "./ListarTarefa/ListarTarefa";


const Tasks = () => {
 

    return (
        <div className="container-tasks">
            <Header />
            <main>
            <div className="container-button">
                    <button className="button">
                        ─ Listar todas as Tarefas
                    </button>
                    <button className="button">
                        ─ Registre uma nova Tarefa
                    </button>
                </div>
                <ListarTarefa/>
               <TarefaForm/>
            </main>
        </div>
    )
}

export default Tasks;
