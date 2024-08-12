import Header from "../../components/Header/Header";
import Tarefa from "../../components/Tarefa/Tarefa";
import Usuario from "../../components/Usuario/Usuario";
import useData from "../../hooks/useData";
import './_tasks.scss'

const Tasks = () => {
    const { infos, handleDelete } = useData({ api: 'Tarefa', deleteEndpoint: 'Tarefa' });
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