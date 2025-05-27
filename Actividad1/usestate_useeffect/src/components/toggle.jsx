import React, { useState } from 'react'

 function Toggle() {
    const [encendido,setEncendido]=useState(false);

    const manejarClick = () => {
      setEncendido(!encendido);
    };
    
  return (
    <div>
        <p>El interruptor está {encendido ? 'encendido' : 'apagado'}</p>
        <button onClick={manejarClick}>
            {encendido ? 'encendido' : 'apagado'}
        </button>
    </div>
  );
}
export default Toggle;


