import { useState } from "react";
import Header from "../../components/Header/Header";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import ListarProjetos from './ListarProjetos/ListarProjetos';
import './_projects.scss';
import './_Mobileprojects.scss';

const Projects = () => {
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);

    const toggleVisibility = () => {
        setIsDashboardVisible(prevState => !prevState);
    };

    return (
        <div className="container-projetos">
            <div className="topo">
                <div className="mobile">
                    <MenuMobile onClick={toggleVisibility} />
                </div>
            </div>
            <div className={`header ${isDashboardVisible ? '' : 'visible'}`}>
                <Header />
            </div>
            <div className={`main ${isDashboardVisible ? 'visible' : 'hidden'}`}>
                <ListarProjetos />
            </div>
        </div>
    );
};

export default Projects;
