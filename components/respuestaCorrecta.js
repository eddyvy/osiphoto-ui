import { Home, Trash2, Edit2, Download } from 'react-feather'
import Image from "next/image"
import Swal from 'sweetalert2'
import { useState } from 'react'

const RepuestaCorrecta = ({setScreen}) => {

  const [ imagenes, setImagenes ] = useState([
    {id: 1, version: '1.4'},
    {id: 2, version: '1.3'},
    {id: 3, version: '1.2'},
    {id: 4, version: '1.1'},
    {id: 5, version: '1.0'},
  ])

  const eliminarImagen = () => {
    if (imagenes.length === 0) return
    setImagenes((oldImagenes) => {
      const [ _, ...resto ] = oldImagenes
      return resto
    })
  }

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Si eliminas el modelo no serás capaz de recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (imagenes.length === 1) {
          Swal.fire(
            '¡Proyecto comprometido!',
            'La integridad del proyecto se vería comprometida si se elimina la única versión',
            'error'
          )
          return
        }
        Swal.fire(
          '¡Eliminado!',
          'Tu modelo ha sido eliminado',
          'success'
        )
        eliminarImagen()
      }
    })
  }

  return (
    <div>
      <div className='container d-flex align-items-center mb-3'>
        <button
          style={{height: '30px'}}
          className='btn btn-outline-dark btn-sm me-4'
          onClick={() => setScreen('home')}
        ><Home size={20} className='pb-1'/></button>
        <h2>Proyecto Secreto | {imagenes[0].version}</h2>
      </div>
      <div className='d-flex justify-content-center mb-2'>
        <Image src={`/images/modelo3d_${imagenes[0].id}.jpg`} alt={`modelo${imagenes[0].id}`} width='200' height='200' />
        <div className='d-flex flex-column flex-shrink-1'>
          <button onClick={handleDelete} className='btn btn-outline-danger btn-sm m-2'><Trash2 size={20} className='pb-1'/></button>
          <button className='btn btn-outline-warning btn-sm m-2' onClick={() => setScreen('viejo')}><Edit2 size={20} className='pb-1'/></button>
          <button className='btn btn-outline-primary btn-sm m-2'><Download size={20} className='pb-1'/></button>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-2'>
      {
        imagenes.map((imagen, idx) => {
          if (idx !== 0) {
            return (
              <div key={idx} className='d-flex flex-column justify-content-center align-items-center mt-1 me-2 ms-2'>
                <Image src={`/images/modelo3d_${imagen.id}.jpg`} alt={`modelo${imagen.id}`} width='50' height='50' />
                <span>{imagen.version}</span>
              </div>
            )
          }
        })
      }
      </div>
    </div>
  )
}

export default RepuestaCorrecta
