import React from 'react'
import Projects from './components/Projects'
import ProjectNew from "./components/ProjectsPort"
import ProjectNew2 from "./components/ProjectsPort2"

import styles from './Portfolio.module.scss'
import Navbar from '../components/Headertwo'
import Doublep from "./components/Double-portfolio"
import Galery from "./components/galery"

import Link from 'next/link'

const page = () => {
  return (
    <div id='Web-development' className={styles.container}>
      <div className='' >
        <div className={styles.navbar}>
          
          <div className={styles.subnav2}>
          <div className={styles.menu}><Navbar /></div>
          </div>
        </div>
        <div className=''>
          <Doublep />
        </div>
        <div  className=''>
          <ProjectNew />
        </div>
        <div  className='pt-1000px'>
          <ProjectNew2 />
        </div>
        <div>
          <Galery />
        </div>
        <div className='py-[1rem] flex justify-center'>
          <div className={styles.navbar2}>
            <div className={styles.subnav1}>
              <div className=''>Vytvořil: David Pešek, 2025</div>
            </div>
            <div className={styles.subnav2}>
              <div>e-mail: david.pesek.prg@gmail.com</div>
              <div>telefon: +420 739 140 013</div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default page