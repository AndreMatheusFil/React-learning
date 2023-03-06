import React from 'react'

import styles from './About.module.css'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
     <h1> Sobre o mini <span>Blog</span> </h1>
     <p>Estre projeto é construido com React no front-end e firebase no back-end</p>
     <Link to='/Post/Create' className='btn'>
        Criar Post
     </Link>
    </div>
  )
}

export default About