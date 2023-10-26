// Resources
import svgHtml5 from '../assets/skills/html5-original.svg'
import svgCss3 from '../assets/skills/css3-original.svg'
import svgJavascript from '../assets/skills/javascript-original.svg'
import svgTypeScript from '../assets/skills/typescript-original.svg'
import svgJquery from '../assets/skills/jquery-original.svg'
import svgReact from '../assets/skills/react-original.svg'
import svgNodejs from '../assets/skills/nodejs-original.svg'
import svgExpress from '../assets/skills/express-original.svg'
import svgSqlite from '../assets/skills/sqlite-original.svg'
import svgPostgreSql from '../assets/skills/postgresql-original.svg'
import svgPython from '../assets/skills/python-original.svg'
import svgC from '../assets/skills/c-original.svg'
import svgGit from '../assets/skills/git-original.svg'
import svgGithub from '../assets/skills/github-original.svg'
import svgJenkins from '../assets/skills/jenkins-original.svg'
import svgCircleCi from '../assets/skills/circleci-plain.svg'
import svgNpm from '../assets/skills/npm-original-wordmark.svg'
import svgYarn from '../assets/skills/yarn-original.svg'
import svgHeroku from '../assets/skills/heroku-original.svg'
import svgCplusplus from '../assets/skills/cplusplus-original.svg'
import svgDotNet from '../assets/skills/dot-net-original.svg'
import svgBootstrap from '../assets/skills/bootstrap-original.svg'

const listFrontEnd = [
  { id: 'lfe0', name: 'HTML5', icon: svgHtml5 },
  { id: 'lfe1', name: 'CSS3', icon: svgCss3 },
  { id: 'lfe2', name: 'React', icon: svgReact },
  { id: 'lfe3', name: 'Javascript', icon: svgJavascript },
  { id: 'lfe4', name: 'TypeScript', icon: svgTypeScript },
  { id: 'lfe5', name: 'JQuery', icon: svgJquery },
  { id: 'lfe6', name: 'Bootstrap', icon: svgBootstrap }
]

const listBackEnd = [
  { id: 'lbe0', name: 'Node.js', icon: svgNodejs },
  // { id: 'lbe1', name: 'Nodemon', icon: '' },
  { id: 'lbe2', name: 'Express', icon: svgExpress },
  { id: 'lbe3', name: 'SQLite', icon: svgSqlite },
  { id: 'lbe4', name: 'PostgreSQL', icon: svgPostgreSql }
  // { id: 'lbe5', name: 'JSON Web Tokens', icon: '' },
  // { id: 'lbe6', name: 'Sessions & Cookies', icon: '' }
]

const listScience = [
  { id: 'lsc0', name: 'Python', icon: svgPython },
  { id: 'lsc1', name: 'C', icon: svgC },
  { id: 'lsc2', name: 'C++', icon: svgCplusplus },
  { id: 'lsc3', name: '.NET', icon: svgDotNet }
]

const listTools = [
  // { id: 'lto0', name: 'CLI', icon: '' },
  { id: 'lto1', name: 'Git', icon: svgGit },
  { id: 'lto2', name: 'Github', icon: svgGithub },
  { id: 'lto3', name: 'Jenkins', icon: svgJenkins },
  { id: 'lto4', name: 'CircleCI', icon: svgCircleCi },
  { id: 'lto5', name: 'NPM', icon: svgNpm },
  { id: 'lto6', name: 'Yarn', icon: svgYarn },
  // { id: 'lto7', name: 'Netlify', icon: '' },
  { id: 'lto8', name: 'Heroku', icon: svgHeroku }
]

function SkillSection ({ title, items }) {
  return (
    <div className=''>
      <h3 className='font-font2 text-center'>{title}</h3>
      <section className='flex flex-row items-center justify-center gap-2 p-2 border-t border-color2 bg-transparent/20 rounded-md'>
        {items.map(item => {
          return (
            <div key={item.id} className=''>
              <img src={item.icon} alt={item.name} className='h-8 w-8' />
              {/* <h4>{item.name}</h4> */}
            </div>
          )
        })}
      </section>
    </div>
  )
}

function Skills () {
  return (
    <div className=''>
      <div className=''>
        <h2 className=''>Mis habilidades</h2>
      </div>

      <div className=' flex flex-col gap-4'>
        <SkillSection title='FRONT-END' items={listFrontEnd} />
        <SkillSection title='BACK-END' items={listBackEnd} />
        <SkillSection title='CIENCIAS' items={listScience} />
        <SkillSection title='HERRAMIENTAS' items={listTools} />
      </div>
    </div>
  )
}

export default Skills
