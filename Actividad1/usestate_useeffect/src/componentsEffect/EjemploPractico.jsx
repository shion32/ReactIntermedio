import React, { useState,useEffect } from 'react'

function EjemploPractico() {
    const [contador, setContador]=useState(0);
    useEffect(()=>{
        document.title='has clickeado ${contador} veces';
    },[contador])
  return (
    <div>
      <p>Has clickeado {contador} veces </p>
      <button onClick={()=>setContador(contador+ 1)}>click aqui</button>
    </div>
  )
}

export default EjemploPractico;

