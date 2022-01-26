import { useState } from 'react'
import CargarProyecto from './cargarProyecto'
import GuiaConsejos from './guiaConsejos'
import Home from './home'
import Layout from './layout'
import NuevoProyecto from './nuevoProyecto'
import Esperando from './esperando'
import RespuestaCorrecta from './respuestaCorrecta'
import RespuestaIncorrecta from './respuestaIncorrecta'

const Controller = ({user, handleLogout}) => {
  const [screen, setScreen] = useState('home')

  const screenToRender = (screen) => {
    switch (screen) {
      case 'home':
        return <Home setScreen={setScreen} handleLogout={handleLogout}/>
      case 'nuevo':
        return <NuevoProyecto setScreen={setScreen} isOld={false}/>
      case 'viejo':
        return <NuevoProyecto setScreen={setScreen} isOld={true}/>
      case 'cargar':
        return <CargarProyecto setScreen={setScreen}/>
      case 'guia':
        return <GuiaConsejos setScreen={setScreen}/>
      case 'esperandoAcierto':
        return <Esperando setScreen={setScreen}/>
      case 'esperandoError':
        return <Esperando setScreen={setScreen} loadError={true}/>
      case 'respuestaCorrecta':
        return <RespuestaCorrecta setScreen={setScreen}/>
      case 'respuestaIncorrecta':
        return <RespuestaIncorrecta setScreen={setScreen}/>
      default:
        return <Home setScreen={setScreen} handleLogout={handleLogout}/>
    }
  }

  return (
    <Layout user={user}>
      {screenToRender(screen)}
    </Layout>
  )
}

export default Controller
