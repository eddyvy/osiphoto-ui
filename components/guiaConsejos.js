import { ArrowLeft } from 'react-feather'
import GuiaContent from "./guiaContenido"

const GuiaConsejos = ({setScreen}) => {
  return(
    <>
      <div className="container d-flex align-items-center">
        <button
          style={{height: '30px'}}
          className='btn btn-outline-dark btn-sm me-4'
          onClick={() => setScreen('home')}
        ><ArrowLeft size={20} className='pb-1' /></button>
        <h2>Guía y Consejos</h2>
      </div>
      <GuiaContent/>
    </>
  )
}

export default GuiaConsejos
