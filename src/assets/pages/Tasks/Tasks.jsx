import { useState } from "react";
import Header from "../../components/Header/Header";
import './_tasks.scss'
import './_Mobiletasks.scss'
import ListarTarefa from "./ListarTarefa/ListarTarefa";
import RegisterTarefa from "./Register/RegisterTarefa";
import MenuMobile from "../../components/MenuMobile/MenuMobile";



const Tasks = () => {
    const [view, setView] = useState('register');

    const handleListTarefa = () => {
        setView('list');
    };

    const handleRegisterTarefa = () => {
        setView('register');
    };
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);

    const toggleVisibility = () => {
        setIsDashboardVisible(prevState => !prevState);
    };

    return (
        <div className="container-tasks">
            <div className="topo">
                <div className="mobile">
                    <MenuMobile onClick={toggleVisibility} />
                </div>
            </div>
            <div className={`header ${isDashboardVisible ? '' : 'visible'}`}>
                <Header />
            </div>
            <div className={`main ${isDashboardVisible ? 'visible' : 'hidden'}`}>
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
           </div>
        </div>
    )
}

export default Tasks;
