import './_registerTarefa.scss';
import './_MobileregisterTarefa.scss';

import useTask from '../../../hooks/useTasks';
import { useState, useEffect } from 'react';
import Sucesso from '../../../components/sucesso/sucesso';
import useData from '../../../hooks/useData';

/**
 * Componente para registrar uma nova tarefa.
 * Utiliza o hook `useTask` para registrar a tarefa e o hook `useData` para obter informações de projetos.
 */

const RegisterTarefa = () => {

    // Hook personalizado para registrar a tarefa e capturar possíveis erros
    const { registrarTarefa, error } = useTask();

    // Estados para armazenar os dados do formulário e mensagens de feedback
    const [nome, setNome] = useState('');
    const [descritiva, setDescritiva] = useState('');
    const [projetoId, setProjetoId] = useState('');
    const [showError, setShowError] = useState(false);
    const [success, setSuccess] = useState(false);

    // Hook personalizado para obter a lista de projetos ativos
    const { infos } = useData({ api: 'Project/Active' });


    /**
    * Manipulador de envio do formulário.
    * Faz o registro da tarefa e trata o feedback de sucesso ou erro.
    * 
    * @param {Event} event - O evento de submissão do formulário.
    */

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting form:', { nome, descritiva, projetoId });

        try {
            await registrarTarefa(nome, descritiva, projetoId);
            setSuccess(true);
            setNome('');
            setDescritiva('');
            setProjetoId('');
        } catch (err) {
            console.error('Error in handleSubmit:', err);
            setShowError(true);
        }
    };

    //Manipulador para ocultar a mensagem de sucesso.
    const handleDismiss = () => {
        setSuccess(false);
    };

    //Efeito colateral para ocultar a mensagem de erro após um tempo.
    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => {
                setShowError(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showError]);

    return (
        <>
            {success ? (
                <Sucesso onDismiss={handleDismiss} />
            ) : (
                <div className="form-container">
                    <h2>Registre uma Tarefa</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="projetos">Escolha um projeto:</label>
                            <select
                                name="projetos"
                                value={projetoId}
                                onChange={(e) => setProjetoId(e.target.value)}
                            >
                                <option value="">Selecione um projeto</option>
                                {infos.length > 0 ? (
                                    infos.map((project) => (
                                        <option key={project.id} value={project.id}>
                                            {project.name}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">Não há projetos disponíveis</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Nome da Tarefa</label>
                            <input
                                required
                                className="input"
                                type="text"
                                placeholder="Nome da Tarefa"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descritiva">Descrição</label>
                            <textarea
                                required
                                cols="50"
                                rows="10"
                                name="descritiva"
                                className="input"
                                placeholder="Descrição"
                                value={descritiva}
                                onChange={(e) => setDescritiva(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="form-submit-btn">Criar</button>
                        {showError && <span className="error-message">{error}</span>}
                    </form>
                </div>
            )}
        </>
    );
};

export default RegisterTarefa;
