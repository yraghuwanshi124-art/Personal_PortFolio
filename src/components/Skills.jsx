import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets/assets'

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className='py-20 bg-dark-200'
        >
            <div className='text-center container mx-auto px-6'>
                <h2 className='text-center text-3xl font-bold mb-4'>My<span className='text-purple-600 ml-2'>Skills</span></h2>
                <p className='text-center text-gray-500 max-w-2xl mx-auto font-bold mb-20'>Get to know about my background and passion</p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                    
                >
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                            skills.map((data, index) => (
                                <div
                                    key={index}
                                    className='bg-gray-800 rounded-2xl p-4 h-50
      transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                                >
                                    <div className="text-purple-500 text-4xl mb-3">
                                        <data.icon />
                                    </div>

                                    <h3 className="ml-2  mb-4 text-white text-2xl font-semibold">
                                        {data.title}
                                    </h3>

                                    <p className='text-gray-400'>
                                        {data.description}
                                    </p>

                                </div>
                            ))

                        }

                    </div>
                </motion.div>



            </div>

        </motion.div>
    )
}

export default Skills
