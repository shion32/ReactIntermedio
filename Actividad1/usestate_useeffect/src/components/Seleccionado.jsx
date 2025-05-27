import React from 'react'
import  { useState } from 'react'


function Seleccionado() {
    const [seleccion, setSeleccion]=useState('');
    const manejarCambio = (e) => {
      setSeleccion(e.target.value)
    }
    
  return (
    <div>
      <label htmlFor="opciones">Elije una opcion</label>
      <select id="opciones" value={seleccion} onChange={manejarCambio}>
        <option value="opcione1">opcion 1</option>
        <option value="opciones2">opcion 2 </option>
        <option value="opciones3">opcion 3</option>
      </select>
      <p>has seleccionado {seleccion}</p>
    </div>
  )
}
export default Seleccionado;