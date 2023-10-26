import imgProject01 from '../assets/projects/project01.png'

const ListProjects = [
  {
    id: 'srv1',
    image: imgProject01,
    title: 'Proyecto 01',
    description: 'Descripcion y tecnologias'
  },
  {
    id: 'srv2',
    image: imgProject01,
    title: 'Proyecto 02',
    description: 'Descripcion y tecnologias'
  },
  {
    id: 'srv3',
    image: imgProject01,
    title: 'Proyecto 03',
    description: 'Descripcion y tecnologias'
  },
  {
    id: 'srv4',
    image: imgProject01,
    title: 'Proyecto 04',
    description: 'Otra descripcion'
  },
  {
    id: 'srv5',
    image: imgProject01,
    title: 'Proyecto 05',
    description: 'Otra descripcion'
  },
  {
    id: 'srv6',
    image: imgProject01,
    title: 'Proyecto 06',
    description: 'Otra descripcion'
  },
  {
    id: 'srv7',
    image: imgProject01,
    title: 'Proyecto 07',
    description: 'Otra descripcion'
  },
  {
    id: 'srv8',
    image: imgProject01,
    title: 'Proyecto 08',
    description: 'Otra descripcion'
  },
  {
    id: 'srv9',
    image: imgProject01,
    title: 'Proyecto 09',
    description: 'Otra descripcion'
  },
  {
    id: 'srv10',
    image: imgProject01,
    title: 'Proyecto 10',
    description: 'Otra descripcion'
  }
]

function Work () {
  return (
    <section className='text-color6' id='work'>

      <div className='text-center py-4'>
        <h2 className='font-font1 text-xl'>Proyectos</h2>
        <p className='font-font2'>Cosas en las que soy experto y apasionado.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {ListProjects.map(item => {
          return (
            <div key={item.id} className='flex flex-col items-center justify-center hover:border'>
              <div className=''>
                <img src={item.image} alt={item.title} className='h-36 object-contain'/>
              </div>
              <h3 className='font-font1'>{item.title}</h3>
              <p className='font-font2'>{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Work
