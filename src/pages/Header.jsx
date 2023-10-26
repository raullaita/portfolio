import React from 'react'
// images
import LogoImage from '../assets/images/logo_image.svg'
import Button from '../components/Button'

const Header = () => {
  return (
    <header className=''>
      <div className=''>
        {/* logo */}
        <a href='#' className=''>
          <img className='' src={LogoImage} alt='' />
        </a>
        {/* button */}
        <Button>Contacto</Button>
      </div>
    </header>
  )
}

export default Header
