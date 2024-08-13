import './_tarefaForm.scss';

const TarefaForm = () => {
    return (
        <div className="form-container">
            <h2>Registre uma Tarefa</h2>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="projetos">Escolha uma fruta:</label>
                    <select name="projetos">
                        <option value="projeto">Maçã</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Nome da Tarefa</label>
                    <input required name="text" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">Descrição</label>
                    <textarea required cols="50" rows="10" name="textarea" defaultValue=""></textarea>
                </div>
                <button type="submit" className="form-submit-btn">Criar</button>
            </form>
        </div>
    );
};

export default TarefaForm;
