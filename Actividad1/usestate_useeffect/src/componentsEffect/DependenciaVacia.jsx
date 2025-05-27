import React, { useState,useEffect } from 'react'

function DependenciaVacia() {
    useEffect(()=> {
        console.log("este efecto se ejecuta solo uan vez, al motarse el componente")
    },[]);
  return (
    <div>
      <p>conponente montado</p>
    </div>
  )
}

export default DependenciaVacia
