import { Home, Trash2, Edit2, Download } from 'react-feather'
import Image from "next/image"

const RepuestaCorrecta = ({setScreen}) => {
  return (
    <div>
      <div className='container d-flex align-items-center mb-3'>
        <button
          style={{height: '30px'}}
          className='btn btn-outline-dark btn-sm me-4'
          onClick={() => setScreen('home')}
        ><Home size={20} className='pb-1'/></button>
        <h2>Proyecto Secreto | 1.4</h2>
      </div>
      <div className='d-flex justify-content-center mb-2'>
        <Image src='/images/modelo3d_1.jpg' alt='modelo1' width='200' height='200' />
        <div className='d-flex flex-column flex-shrink-1'>
          <button className='btn btn-outline-danger btn-sm m-2'><Trash2 size={20} className='pb-1'/></button>
          <button className='btn btn-outline-warning btn-sm m-2' onClick={() => setScreen('viejo')}><Edit2 size={20} className='pb-1'/></button>
          <button className='btn btn-outline-primary btn-sm m-2'><Download size={20} className='pb-1'/></button>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <div className='d-flex flex-column justify-content-center align-items-center mt-1 me-2 ms-2'>
          <Image src='/images/modelo3d_2.jpg' alt='modelo2' width='50' height='50' />
          <span>1.3</span>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center mt-1 me-2 ms-2'>
          <Image src='/images/modelo3d_3.jpg' alt='modelo3' width='50' height='50' />
          <span>1.2</span>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center mt-1 me-2 ms-2'>
          <Image src='/images/modelo3d_4.jpg' alt='modelo4' width='50' height='50' />
          <span>1.1</span>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center mt-1 me-2 ms-2'>
          <Image src='/images/modelo3d_5.jpg' alt='modelo5' width='50' height='50' />
          <span>1.0</span>
        </div>
      </div>
    </div>

  )
}

export default RepuestaCorrecta
