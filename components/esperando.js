import Image from "next/image"
import { useEffect, useState } from "react"

const Esperando = ({setScreen, loadError = false}) => {
  const [ noChange, setNochange ] = useState('nothing')
  const [ message, setMessage ] = useState('Conectando con el servidor')

  const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const generarPuntos = (msg, isRemove = false) => {
    if (isRemove) return msg.split('...')[0]
    return msg + '.'
  }

  const efectoTresPuntos = async() => {
    const delay = 250
    await sleep(delay)
    setMessage((oldMsg) => generarPuntos(oldMsg))
    await sleep(delay)
    setMessage((oldMsg) => generarPuntos(oldMsg))
    await sleep(delay)
    setMessage((oldMsg) => generarPuntos(oldMsg))
    await sleep(delay)
    setMessage((oldMsg) => generarPuntos(oldMsg, true))
  }

  const todoElEfecto = async() => {
    await efectoTresPuntos()
    await efectoTresPuntos()
    setMessage('Subiendo los datos a la nube')
    await efectoTresPuntos()
    await efectoTresPuntos()
    setMessage('Procesando la información')
    await efectoTresPuntos()
    await efectoTresPuntos()
    setMessage('Dando forma al modelo')
    await efectoTresPuntos()
    await efectoTresPuntos()
    setMessage('Generando archivos del modelo')
    await efectoTresPuntos()
    await efectoTresPuntos()
    setMessage('Descargando archivos')
    await sleep(500)
    setScreen(loadError ? 'respuestaIncorrecta' : 'respuestaCorrecta')
  }

  useEffect(() => {
    todoElEfecto()
  }, [noChange])

  return (
    <>
      <Image
        src='/images/subiendo_nube.gif'
        alt='loading cloud'
        width='300'
        height='225'
      />
      <h3 style={{width: '420px', textAlign: 'left'}}>{message}</h3>
      <p>
        Puede cerrar el programa si lo desea, <br></br>
        se le notificará cuando el proceso haya terminado
      </p>
    </>
  )
}

export default Esperando
