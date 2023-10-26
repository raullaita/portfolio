import ImgAbout from '../assets/about.png'
import Skills from './Skills'

const ListData = [
  { id: 'lst1', title: '+15', description: 'Años de experiencia' },
  { id: 'lst1', title: '+100', description: 'Proyectos completados' },
  { id: 'lst1', title: '+100', description: 'Clientes satisfechos' }
]

function Landing () {
  return (
    <section
      className='h-full sm:h-screen w-screen flex flex-col sm:flex-row items-center justify-center text-color6'
      id='about'
    >
      <div className='w-full sm:w-1/2 h-full flex items-center justify-center p-4'>
        <img src={ImgAbout} alt='' className='' />
      </div>

      <div className='w-full sm:w-1/2 h-full flex flex-col items-center justify-center p-4 sm:pr-10 gap-8'>

        <div className='flex flex-col gap-4 items-center justify-center'>
          <h2 className='font-font1 text-2xl'>En qué te puedo ayudar...</h2>
          <h3 className='font-font2'>
            Mi meta principal es aportar soluciones robustas y que mejoren el día a día
          </h3>
        </div>

        <div className='font-font2 flex flex-row gap-10'>
          {ListData.map(item => {
            return (
              <div
                key={item.key}
                className='flex flex-col items-center justify-center'
              >
                <h2 className='font-font1 text-3xl py-2 text-color1'>{item.title}</h2>
                <h4 className='font-font2 text-center'>{item.description}</h4>
              </div>
            )
          })}
        </div>

        <div>
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default Landing
