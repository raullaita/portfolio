import './App.css'

// Pages
import LandingPage from './pages/Landing'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import WorkPage from './pages/Work'
import ContactPage from './pages/Contact'
import Nav from './components/Nav'

function App () {
  return (
    <div className='bg-color2'>
      <Nav />
      <LandingPage />
      <AboutPage />
      <ServicesPage />
      <WorkPage />
      <ContactPage />
    </div>
  )
}

export default App
