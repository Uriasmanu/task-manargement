import Header from "../../components/Header/Header";
import Tarefa from "../../components/Tarefa/Tarefa";
import Usuario from "../../components/Usuario/Usuario";
import './_tasks.scss'

const Tasks = () => {
    return (
        <div className="container-tasks">
            <Header />
            <main>
                <h2>Tarefas</h2>
                <div className="tarefas-projetos">

                    <p>Tarefas do projeto (nome do projeto)</p>
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                </div>

            </main>
            <Usuario />
        </div>
    )
}

export default Tasks;