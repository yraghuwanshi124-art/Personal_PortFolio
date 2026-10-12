
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
      viewport={{ once: false, amount: 0.2 }}
      id='project'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6 mt-9'>
        <h2 className='text-center text-3xl font-bold mb-4'>
          My
          <span className='text-purple-600 ml-2'>Projects</span>
        </h2>

        <p className='text-center text-gray-400 font-bold mb-20'>
          A Selection of Full-Stack and Software Development Projects
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {projects.map((data, index) => (
              <motion.div
                key={data.title || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className='bg-gray-800 rounded-2xl overflow-hidden
                border border-gray-700 hover:border-purple-600
                transition-all duration-300 hover:-translate-y-2'
              >
                <ProjectCard {...data} />

                <div className='flex flex-wrap gap-4 px-5 pb-5'>
                  {data.github && (
                    <a
                      href={data.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 text-center px-4 py-2
                      rounded-lg border border-purple-600
                      text-purple-500 hover:bg-purple-600
                      hover:text-white transition-colors duration-300'
                    >
                      GitHub
                    </a>
                  )}

                  {data.demo && (
                    <a
                      href={data.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 text-center px-4 py-2
                      rounded-lg bg-purple-600 text-white
                      hover:bg-purple-700 transition-colors duration-300'
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects
