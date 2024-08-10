import './_projetos.scss';

const Projetos = () => {
    return (
        <div className='container-projeto'>
            <div className="card">
                <div className="card__wrapper">
                    <div className="card___wrapper-acounts">
                        <div className="card__score">+3</div>

                    </div>
                    <div className="card__menu"><svg xmlns="http://www.w3.org/2000/svg" width="4" viewBox="0 0 4 20" height="20" fill="none"><g fill="#000"><path d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"></path><path d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z"></path><path d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z"></path></g></svg></div>
                </div>
                <div className="card__title">Web Design templates
                    Selection</div>
                <div className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
                <div className="card__indicator"><span className="card__indicator-amount">135</span> Works / <span className="card__indicator-percentage">45%</span></div>
                <div className="card__progress"><progress max="100" value="40"></progress></div>

            </div>
        </div>
    )
}

export default Projetos;