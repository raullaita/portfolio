import React from 'react'
// images
// import Image from '../assets/avatar.svg'
import Image from '../assets/images/caricatura_01.jpg'
// icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='' id='home'>
      <div className=''>
        <div className=''>
          {/* text */}
          <div className=''>
            <h1>RAUL LAITA</h1>
            <div className=''>
              <span className=''></span>
            </div>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id
              fugit sunt aut cumque impedit qui perspiciatis
            </p>
            <div className=''>
              <Button>Portfolio</Button>

              {/* socials */}
              <a href='#'>
                <FaYoutube className='' />
              </a>
              <a href='#'>
                <FaGithub className='' />
              </a>
              <a href='#'>
                <FaDribbble className='' />
              </a>
            </div>
          </div>
          {/* image */}
          <div className=''>
            <img src={Image} alt='' className='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
