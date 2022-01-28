import { useState } from 'react'
import Swal from 'sweetalert2'
import Login from '../components/login'
import Controller from '../components/controller'

export default function Index() {
  const [ logged, setLogged ] = useState(false)
  const [ user, setUser ] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const pass = e.target[1].value

    if (pass === '1234') {
      const emailName = email.split('@')[0]
      const name = emailName.charAt(0).toUpperCase() + emailName.slice(1)
      setUser(name)
      setLogged(true)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error de acceso',
        text: 'El email o la contraseña son incorrectos',
      })
    }
  }

  const handleLogout = () => setLogged(false)

  return (
    <>
      {
        logged
          ? <Controller user={user} handleLogout={handleLogout}/>
          : <Login handleLogin={handleLogin}/>
      }
    </>
  )
}
