import { useState, useEffect } from 'react';

import './_dia.scss';

const Dia = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Atualiza a cada minuto

    return () => clearInterval(timer); // Limpa o timer ao desmontar o componente
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {

      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className='contaiDia'>
      <p>{formatDate(currentDate)}</p>
    </div>
  );
};

export default Dia;
