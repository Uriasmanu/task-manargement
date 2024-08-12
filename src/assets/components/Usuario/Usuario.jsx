import usuario from '../../imagens/usuario.png';

import './_usuario.scss'

const Usuario = () =>{
    return(

        <div className="usuario">
                <div className='card-imagem-user'>
                    <img src={usuario} alt="" />
                </div>

                <div className='contem-projeto'>
                    <h4>Projetos Atual</h4>
                    <div className="cards-projetos">
                        

                    </div>
                    <div className="cards-projetos"></div>
                    <div className="cards-projetos"></div>
                </div>
            </div>

    )
}

export default Usuario;