const TaskList = () =>{
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('https://localhost:7228/api/Usuario');
                console.log('Resposta da API:', response.data); 
                const usuariosData = response.data.$values || [];
                setUsuarios(usuariosData);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        fetchUsuarios();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este usuário?');
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7228/api/Usuario/${id}`);

                setUsuarios((prevUsuarios) => prevUsuarios.filter(usuario => usuario.id !== id));
            } catch (error) {
                console.error('Erro ao deletar usuário:', error);
            }
        }
    };
    return(
        <>
        </>
    )
}

export default TaskList;