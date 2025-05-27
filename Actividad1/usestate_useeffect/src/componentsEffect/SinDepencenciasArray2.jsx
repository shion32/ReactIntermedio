import React, { useEffect, useState } from 'react';

function SinDepencenciasArray2() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    console.log('El componente ha sido renderizado o actualizado');
    return () => {
      console.log('Limpiando efecto');
    };
  }); 

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default SinDepencenciasArray2;