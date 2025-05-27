import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Toggle  from './components/toggle'
import Seleccionado from './components/Seleccionado'
import ToggleEstado from './components/ToggleEstado'
import EjemploPractico from './componentsEffect/EjemploPractico'
import DependenciaVacia from './componentsEffect/DependenciaVacia'
import DepencenciasArray from './componentsEffect/DepencenciasArray'
import DependenciasUseEffect from './componentsEffect/DependenciasUseEffect'
import SinDepencenciasArray1 from './componentsEffect/SinDepencenciasArray1'
import SinDepencenciasArray2 from './componentsEffect/SinDepencenciasArray2'
import ApiRest from './componentsEffect/ApiRest'

function App() {
  return (
    <>
      <Toggle/>
      <Seleccionado/>
      <ToggleEstado/>
      <EjemploPractico/>
      <DependenciaVacia/>
      <DepencenciasArray/>
      <SinDepencenciasArray1/>
      <SinDepencenciasArray2/>
      <DependenciasUseEffect/>
      <ApiRest/>
      </>
    
  )
}

export default App
