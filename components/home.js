import Link from 'next/link'
import { AlertTriangle, Globe } from 'react-feather'
import Layout from './layout'

const Home = ({setScreen, handleLogout}) => {
  return (
    <div>
      <h2 className='m-4'>Fotogrametría en la Nube</h2>
      <div className='d-flex justify-content-center flex-column'>
        <button className='m-2 btn btn-outline-primary' onClick={() => setScreen('nuevo')}>Nuevo Proyecto</button>
        <button className='m-2 btn btn-outline-success' onClick={() => setScreen('cargar')}>Cargar Proyecto</button>
        <button className='m-2 btn btn-outline-warning' onClick={() => setScreen('guia')}>Guía y Consejos</button>
        <div className='d-flex justify-content-end mt-3'> 
          <a className='btn btn-outline-info me-2' href='https://es.wikipedia.org/wiki/Fotogrametr%C3%ADa' target='_blank' rel='noreferrer'><Globe/></a>
          <button className='btn btn-outline-danger ms-2' onClick={handleLogout}><AlertTriangle/></button>
        </div>
      </div>
    </div>
  )
}

export default Home
