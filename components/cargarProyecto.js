import { useState } from "react"
import { ArrowLeft, CornerRightDown } from 'react-feather'

const CargarProyecto = ({setScreen}) => {
  const [ selection, setSelection ] = useState(null)

  const handleClick = () => setScreen('viejo')
  const handleSelect = (e) => setSelection(e.target.parentNode.id)

  return(
    <div className='container d-flex flex-column'>
      <div className='container d-flex align-items-center mb-3'>
        <button
          style={{height: '30px'}}
          className='btn btn-outline-dark btn-sm me-4'
          onClick={() => setScreen('home')}
        ><ArrowLeft size={20} className='pb-1'/></button>
        <h2>Cargar Proyecto</h2>
      </div>
      <div className='d-flex justify-content-end'>
        <button onClick={handleClick} disabled={!selection} className='btn btn-outline-primary btn-sm'><CornerRightDown size={20} className='pb-1'/></button>
      </div>
      <div style={{height: '230px', overflow: 'auto'}}>
        <table className="table">
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Fecha modificaciones</th>
              <th>Versiones</th>
            </tr>
            <tr
              id='pro1'
              onClick={handleSelect}
              className={`p-1 ${(selection === 'pro1') && 'border border-primary border-3'}`}
            >
              <td>Proyecto Secreto</td>
              <td>01/01/2022</td>
              <td>
                <span>1.4, </span>
                <span>1.3, </span>
                <span>1.2, </span>
                <span>1.1, </span>
                <span>1.0</span>
              </td>
            </tr>
            <tr
              id='pro2'
              onClick={handleSelect}
              className={`p-1 ${(selection === 'pro2') && 'border border-primary border-3'}`}
            >
              <td>Proyecto A</td>
              <td>12/11/2021</td>
              <td>
                <span>1.2, </span>
                <span>1.1, </span>
                <span>1.0 </span>  
              </td>
            </tr>
            <tr
              id='pro3'
              onClick={handleSelect}
              className={`p-1 ${(selection === 'pro3') && 'border border-primary border-3'}`}
            >
              <td>Proyecto C</td>
              <td>10/09/2021</td>
              <td>
                <span>1.1, </span>
                <span>1.0 </span>  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CargarProyecto
