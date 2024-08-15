import { useState, useEffect } from 'react';
import useProject from '../../../hooks/useProjects';
import './_projectForm.scss';
import Sucesso from '../../../components/sucesso/sucesso';


/**
 * Componente para criar um novo projeto.
 * Utiliza o hook `useProject` para criar um projeto e lidar com erros.
 */
const ProjectForm = () => {

    // Hook personalizado para criar um projeto e capturar possíveis erros
    const { createProject, error } = useProject();

    // Estados para armazenar os dados do formulário e feedbacks
    const [name, setName] = useState('');
    const [descricao, setDescription] = useState('');
    const [showError, setShowError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const project = await createProject(name, descricao);
            console.log('Projeto criado com sucesso:', project);
            setSuccess(true);
        } catch (err) {
            console.error('Erro ao criar projeto:', err);
            setShowError(true); // Exibe a mensagem de erro
        }
    };

    useEffect(() => {
        if (showError) {
            // Define um temporizador para ocultar a mensagem de erro após 2 segundos
            const timer = setTimeout(() => {
                setShowError(false);
            }, 2000);

            // Limpa o temporizador se o componente for desmontado ou showError mudar
            return () => clearTimeout(timer);
        }
    }, [showError]);

    const handleDismiss = () => {
        setSuccess(false);
    };

    return (
        <>
            {success ? (
                <Sucesso onDismiss={handleDismiss} />
            ) : (
                <form className="container-form-register" onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="form">
                            <span className="heading">Registrar Projeto</span>

                            <input
                                placeholder="Nome"
                                type="text"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required // Adicionei o required para validação
                            />

                            <textarea
                                placeholder="Descrição"
                                rows="10"
                                cols="30"
                                className="textarea"
                                value={descricao}
                                onChange={(e) => setDescription(e.target.value)}
                                required // Adicionei o required para validação
                            ></textarea>

                            <div className="button-container">
                                {showError && error && (
                                    <p className="error-message">{error}</p>
                                )}
                                <button type="submit" className="send-button">
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default ProjectForm;
