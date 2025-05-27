import React, { useState, useEffect } from 'react';

function DependenciasUseEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  
  useEffect(() => {
    console.log('El valor de count ha cambiado:', count);
  }, [count]);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('¡Han pasado 2 segundos!');
    }, 2000);

    
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Aumentar contador</button>
      <p>{message}</p>
    </div>
  );
}

export default DependenciasUseEffect;
