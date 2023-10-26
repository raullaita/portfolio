// Resources
import logo from '../assets/logo.svg'
import cartoon from '../assets/cartoon.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
// components
import Button from '../components/Button'

function Landing () {
  return (
    <div className='sm:h-screen w-screen' id='home'>
      <header className='sm:h-[100px] w-full flex flex-col sm:flex-row items-center justify-between px-20 py-5 gap-5'>
        {/* logo */}
        <a href='#' className=''>
          <img className='h-10' src={logo} alt='laita.dev' />
        </a>
        {/* button */}
        <Button>Contacto</Button>
      </header>

      <section className='sm:h-[calc(100vh-100px)] flex flex-col sm:flex-row'>
        {/* text */}
        <div className='sm:w-1/2 flex flex-col items-center justify-center px-6 sm:pl-20 text-color6 gap-4'>
          <h1 className='font-font1 text-2xl'>¡Hola! Soy Raul Laita</h1>
          <p className='font-font2'>
            Ingeniero de software con más de 15 años de experiencia en la creación de aplicaciones web, escritorio y móviles, utilizando las tecnologías más innovadoras.
          </p>
          <p className='font-font1'>Deja que te enseñe...</p>
          <div className='flex flex-row gap-6'>
            {/* socials */}
            <a href='#'>
              <FaLinkedin className='h-10 w-10 hover:text-color1/50' />
            </a>
            <a href='#'>
              <FaGithub className='h-10 w-10 hover:text-color1/50' />
            </a>
          </div>
        </div>
        {/* image */}

        <div className='w-full sm:w-1/2 flex flex-col items-center justify-center'>
          <img src={cartoon} alt='laita.dev' className='sm:h-[70vh] object-cover'/>
        </div>
      </section>
    </div>
  )
}

export default Landing
