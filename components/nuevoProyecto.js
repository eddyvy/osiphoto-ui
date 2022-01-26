import { useState } from 'react'
import Swal from 'sweetalert2'
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  Edit2
} from 'react-feather'
import ImageGenerator from './imageGenerator'

const NuevoProyecto = ({setScreen, isOld}) => {
  const [ name, setName ] = useState(isOld ? 'Proyecto Secreto' : '')
  const [ numberPhotos, setNumberPhotos ] = useState(isOld ? 3 : 0)
  const [ selection, setSelection ] = useState(null)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSelect = (e) => {
    setSelection(e.target.id)
  }

  const handleAdd = () => {
    setNumberPhotos((oldNum) => oldNum + 1)
  }

  const handleRemove = () => {
    setNumberPhotos((oldNum) => (oldNum > 0) ? oldNum - 1 : 0)
  }

  const handleClickEdit = () => {
    Swal.fire({
      html:`
        <div>
          <header class="navbar navbar-dark bg-dark rounded-top mb-3">
            <div class='container-fluid'>
              <span class='text-white bg-dark'>Osiphoto 3D</span>
              <span class='text-white bg-dark'>Editando Fotografía</span>
            </div>
          </header>
          <div class='d-flex flex-nowrap justify-content-center'>
            <div style='width: 25px' class='d-flex flex-column'>
              <button class='btn btn-outline-dark btn-sm mb-1'>
                <svg class='pb-1 pe-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
              </button>
              <button class='btn btn-outline-dark btn-sm mb-1'>
                <svg class='pb-1 pe-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
              </button>
              <button class='btn btn-outline-dark btn-sm mb-1'>
                <svg class='pb-1 pe-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
              </button>
              <button class='btn btn-outline-primary btn-sm mb-1'>
                <svg class='pb-1 pe-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
              <button class='btn btn-outline-danger btn-sm mb-1'>
                <svg class='pb-1 pe-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
              <button class='btn btn-outline-warning btn-sm mb-1'>
                <svg class='pb-1 pe-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
              </button>
            </div>
            <Image src='/images/foto1.jpg' alt="foto1" width="200" height="200"/>
          </div>
          <h3>Enmarque el objeto clave</h3>
        </div>
      `,
      showDenyButton: true,
      confirmButtonText: 'V',
      denyButtonText: `X`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Guardado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se han guardado los cambios', '', 'warning')
      }
    })

  }

  const handleAdvance = () => {
    if (!name) {
      Swal.fire({
        icon: 'error',
        title: 'Proyecto sin nombre',
        text: 'Debes agregar un nombre al proyecto',
      })
      return
    }

    if (numberPhotos === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Proyecto sin fotos!',
        text: 'Debes agregar imágenes al proyecto',
      })
      return
    }

    if (name === 'error') {
      setScreen('esperandoError')
      return
    }
    setScreen('esperandoAcierto')
  }

  return(
    <div className='container'>
      <div className="container d-flex align-items-center">
        <button
          style={{height: '30px'}}
          className='btn btn-outline-dark btn-sm me-4'
          onClick={() => setScreen('home')}
        ><ArrowLeft size={20} className='pb-1'/></button>
        <h2>Nuevo Proyecto</h2>
      </div>
      <div className='d-flex flex-column align-items-start'>
        <div className='mt-4 mb-4'>
          <span className='me-3'>Nombre</span>
          <input onChange={handleChange} value={name}></input>
        </div>
        <br></br>
        <div className='mb-3 d-flex' style={{width:'100%'}}>
          <span className='me-3'>Imágenes</span>
          <button className='btn btn-outline-primary ms-1 me-1 btn-sm' onClick={handleAdd}><Plus size={20} className='pb-1'/></button>
          <button className='btn btn-outline-warning ms-1 me-1 btn-sm' disabled={selection === null} onClick={handleClickEdit}><Edit2 size={20} className='pb-1'/></button>
          <button className='btn btn-outline-danger ms-1 me-1 btn-sm' onClick={handleRemove}><Minus size={20} className='pb-1'/></button>
          <div className='w-100'></div>
          <button className='btn btn-outline-success me-5 btn-sm flex-shrink-1' onClick={handleAdvance}><ArrowRight size={20} className='pb-1'/></button>
        </div>
      </div>
      <ImageGenerator imageNumber={numberPhotos} handleSelect={handleSelect} selection={selection} />
    </div>
  )
}

export default NuevoProyecto
