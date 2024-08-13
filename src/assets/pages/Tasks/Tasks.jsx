import Header from "../../components/Header/Header";
import TarefaForm from "../../components/TarefaForm/TarefaForm";
import './_tasks.scss'


const Tasks = () => {
 

    return (
        <div className="container-tasks">
            <Header />
            <main>
               <TarefaForm/>
            </main>
        </div>
    )
}

export default Tasks;
