import prueba from '../styles/prueba.module.css'

export default function Prueba() {
  return (
    <div>
      <title>Burger Queen</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <main >
        <div>
          <>
            <header>
              <h1 className={prueba.title}>Burger Queen</h1>
            </header>
            <nav className='links'>
              <a href=""> Administrador</a>
              <a href=""> Administrador</a>
              <a href=""> Administrador</a>
            </nav>
          </>

          <h1>Ir a <a href='/'>Home </a> </h1>
        </div>

      </main>
    </div>
  )
}
