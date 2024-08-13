import { useState } from "react";
import Header from "../../components/Header/Header";
import './_tasks.scss'
import ListarTarefa from "./ListarTarefa/ListarTarefa";
import RegisterTarefa from "./Register/RegisterTarefa";



const Tasks = () => {
    const [view, setView] = useState('register');

    const handleListTarefa = () => {
        setView('list');
    };

    const handleRegisterTarefa = () => {
        setView('register');
    };

    return (
        <div className="container-tasks">
            <Header />
            <main>
                <div className="container-button">
                    <button className="button" onClick={handleListTarefa}>
                        ─ Listar todas as Tarefas
                    </button>
                    <button className="button" onClick={handleRegisterTarefa}>
                        ─ Registre uma nova Tarefa
                    </button>
                </div>
                {view === 'list' ? (
                    <ListarTarefa />
                ) : (
                    <RegisterTarefa />
                )}
            </main>
        </div>
    )
}

export default Tasks;
