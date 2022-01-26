import Swal from 'sweetalert2'
import { HelpCircle, ArrowRight, AtSign, Key } from 'react-feather'
import Layout from './layout'

const Login = ({handleLogin}) => {

  const handleHelp = () => {
    Swal.fire({
      icon: 'question',
      title: '¿Necesitas acceso?',
      footer: '<a href="">Contacta con nosotros</a>'
    })
  }

  return (
    <Layout>
      <form onSubmit={handleLogin}>
        <h4 className='mt-3'>Email <AtSign className='text-primary'/></h4>
        <input name='email' id='email-input' type='email'/>
        <h4 className='mt-3'>Contraseña <Key className='text-warning'/></h4>
        <input className='mb-3' name='password' id='password-input' type='password'/>
        <div className='mt-1 d-flex justify-content-around'>
          <button className='btn btn-outline-warning' type='reset' onClick={handleHelp}><HelpCircle/></button>
          <button className='btn btn-outline-success' type='submit'><ArrowRight/></button>
        </div>
      </form>
    </Layout>
  )
}

export default Login
