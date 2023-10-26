// IMAGES
import MapSpain from '../assets/map.webp'
// ICONS
import { LuMail, LuMessageSquare, LuLocate } from 'react-icons/lu'
// COMPONENTS
import Button from '../components/Button'

const ListData = [
  { id: 'lst1', title: 'E-mail', description: 'email@email.com', icon: LuMail },
  {
    id: 'lst2',
    title: 'Mensaje',
    description: 'LinkedId',
    icon: LuMessageSquare
  },
  {
    id: 'lst3',
    title: 'Ubicación',
    description: 'Madrid - España',
    icon: LuLocate
  }
]

function Contact () {
  return (
    <section
      className='h-screen w-screen flex flex-col sm:flex-row text-color6'
      id='contact'
    >
      <div className='w-full sm:w-1/2 h-full flex flex-col items-center justify-center'>
        <img src={MapSpain} alt='' />

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {ListData.map(item => {
            return (
              <div key={item.id} className='flex flex-row items-center gap-4'>
                <item.icon className='h-10 w-10 text-color1' />

                <div className='flex flex-col'>
                  <h3 className='font-font1'>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='w-full sm:w-1/2 h-full flex flex-col items-center justify-center'>
        {/* text */}
        <div className='flex flex-col items-center justify-center gap-8'>
          <h4 className='text-4xl font-font1 py-6 text-center'>Trabajemos juntos !!</h4>
        </div>

        {/* form */}
        <form className='flex flex-col gap-4 px-20 font-font2'>

          {/* NAME */}
          <label htmlFor="name" className=''>
            Nombre:
            <input className='w-full h-10 rounded-xl bg-color2 border px-4' type='text' name='name'/>
          </label>

          {/* EMAIL */}
          <label htmlFor="email" className=''>
            E-mail:
            <input className='w-full h-10 rounded-xl bg-color2 border px-4' type='text' name='email'/>
          </label>

          {/* MESSAGE */}
          <label htmlFor="message" className=''>
            Mensaje:
            <textarea className='w-full rounded-xl bg-color2 border px-4' name='message'></textarea>
          </label>

          {/* BUTTON */}
          <div className='flex items-center justify-center'>
            <Button>Enviar</Button>
          </div>
        </form>
      </div>

      {/* <div></div> */}
      {/* </div> */}
    </section>
  )
}

export default Contact
