import Head from 'next/head'

const Layout = ({ user, children }) => {
  return(
    <>
      <Head>
        <title>Osiphoto</title>
        <meta name='description' content='Osiphoto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='d-flex justify-content-center pt-5'>
        <div className="card rounded" style={{height: '410px',width: '600px'}}>
          <header className="navbar navbar-dark bg-dark rounded-top ps-3 pe-3">
            <div className='container-fluid'>
              <span className='text-white bg-dark'>Osiphoto 3D </span>
              { user && <span className='text-white bg-dark'>Bienvenido {user}</span> }
            </div>
          </header>
          <main className='d-flex flex-wrap justify-content-center p-4'>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
