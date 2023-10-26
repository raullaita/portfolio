// Resources
import {
  FaCloud,
  FaCode,
  FaCogs,
  FaDatabase,
  FaLink,
  FaMobileAlt
} from 'react-icons/fa'

const ListServices = [
  {
    id: 'srv1',
    title: 'Desarrollo de aplicaciones web',
    description:
      'Aplicaciones rápidas, responsivas y atractivas que dan vida a tus ideas.',
    icon: FaCode
  },
  {
    id: 'srv2',
    title: 'Desarrollo de aplicaciones móviles',
    description:
      'Aplicaciones multiplataforma creadas con eficiencia y velocidad para Android e iOS.',
    icon: FaMobileAlt
  },
  {
    id: 'srv3',
    title: 'Desarrollo de API',
    description:
      'API REST que se adaptan a sus necesidades y siguen las mejores prácticas en rendimiento y seguridad.',
    icon: FaCogs
  },
  {
    id: 'srv4',
    title: 'Integración API de terceros',
    description:
      'Integración con cualquier API de terceros de su elección. Amplíe la funcionalidad de sus aplicaciones con el menor esfuerzo.',
    icon: FaLink
  },
  {
    id: 'srv5',
    title: 'Diseño de base de datos',
    description:
      'Diseño adecuado de bases de datos para un desarrollo web y móvil, eficaz, siempre buscando rendimiento, escalabilidad y estabilidad.',
    icon: FaDatabase
  },
  {
    id: 'srv6',
    title: 'Integración en la nube',
    description:
      'Implementación y mantenimiento de sus aplicaciones en una amplia gama de servicios en la nube, desde VPS totalmente administrado hasta VPS altamente personalizable.',
    icon: FaCloud
  }
]

function Services () {
  return (
    <div
      className='h-full sm:h-screen w-screen text-color6 items-center justify-center flex flex-col'
      id='services'
    >
      <div className='text-center'>
        <h2 className='font-font1 text-xl'>SERVICIOS</h2>
        <p className='font-font2'>Cosas en las que soy experto y apasionado.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10'>
        {ListServices.map(item => {
          return (
            <div
              key={item.id}
              className='flex flex-row items-center justify-center'
            >
              <div className='p-4 text-color1'>
                <item.icon className='h-20 w-20' />
              </div>
              <div className=''>
                <h3 className='font-font2 text-lg'>{item.title}</h3>
                <p className='font-font3'>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
