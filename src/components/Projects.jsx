import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets/assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id='project'
      className='py-20 bg-dark-200'
    >

      <div className='container mx-auto px-6 mt-9'>
        <h2 className='text-center text-3xl font-bold mb-4'>My<span className='text-green-600 ml-2'>Projects</span></h2>
        <p className='text-center text-gray-400 font-bold mb-20'>A Selection of Recent Projects </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto'>
            {
              projects.map((data, index) => (
                <ProjectCard  key={index} {...data} />

              ))
            }
          </div>



        </motion.div>
      </div>

    </motion.div>
  )
}

export default Projects








      //           <div
      //             key={index}
      //             className='bg-gray-800 rounded-2xl p-4 h-50
      // transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
      //           >
      //             <div>
                    
      //               </div>
      //           </div>