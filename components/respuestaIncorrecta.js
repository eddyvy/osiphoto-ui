import { Home, BookOpen } from 'react-feather'

const RepuestaIncorrecta = ({setScreen}) => {
  return (
    <div>
      <div className='container d-flex align-items-center mb-3'>
        <button
          style={{height: '30px'}}
          className='btn btn-outline-dark btn-sm me-4'
          onClick={() => setScreen('home')}
        ><Home size={20} className='pb-1'/></button>
        <button
          style={{height: '30px'}}
          className='btn btn-outline-info btn-sm me-4'
          onClick={() => setScreen('home')}
        ><BookOpen size={20} className='pb-1'/></button>
      </div>
      <h3 className='mt-2 mb-2 text-danger'>No se ha podido generar el modelo 3D con las imágenes proporcionadas</h3>
      <p className='mt-3'>
        Consulte los <button className='btn btn-outline-dark btn-sm pb-2' onClick={() => setScreen('guia')}>consejos y la guía</button> del programa
      </p>
    </div>
  )
}

export default RepuestaIncorrecta
