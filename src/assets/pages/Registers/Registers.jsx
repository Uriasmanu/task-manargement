import Header from "../../components/Header/Header";
import Usuario from "../../components/Usuario/Usuario";
import './_registers.scss';

const Registers = () => {
    return (
        <div className="container-registro">
            <Header />
            <main>
                <h2>Registre um novo usuário</h2>
                <form className="form-control" action="">
                    <p className="title">Registro</p>
                    <div className="input-field">
                        <input 
                            required 
                            id="email" 
                            className="input" 
                            type="email" 
                            placeholder="Usuario" 
                        />

                    </div>
                    <div className="input-field">

                        <input 
                            required 
                            id="password" 
                            className="input" 
                            type="password" 
                            placeholder="Senha" 
                        />
                       
                    </div>

                    <button type="submit" className="submit-btn">Registrar</button>
                </form>
            </main>
            <Usuario/>
        </div>
    );
};

export default Registers;
