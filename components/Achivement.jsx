import { assets, achivementData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Achivement = (isDarkMode) => {
  return (
    <motion.div id='achivement' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 1}}>

      <motion.h4 initial={{opacity:0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        My Achivement
      </motion.h4>

      <motion.h2 initial={{opacity:0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        My Achivement Collections
      </motion.h2>

      <motion.p initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        From small wins to major breakthroughs, these are the accomplishments that shaped who I am today.
      </motion.p>
      
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 dark:text-black'>
        {achivementData.map((project, index) => (
          <motion.a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
              py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Achivement
