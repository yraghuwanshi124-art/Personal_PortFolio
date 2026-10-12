import React from 'react'
import { easeOut, motion } from 'framer-motion'
import profile from "../assets/assets/profile.jpeg";
import { FaLightbulb } from "react-icons/fa";
import { aboutInfo } from '../assets/assets/assets';


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >

            <div className='container mx-0 px-6'>
                <h2 className='text-center text-3xl font-bold mb-4'>About <span className='text-purple-600'>Me</span></h2>
                <p className='text-center text-gray-500 max-w-2xl mx-auto font-bold'>Get to know about my background and passion</p>

                <div className='flex flex-col md:flex-row  gap-12 mt-20'>
                    <div className='md:w-1/2 overflow-hiddem'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            src={profile} alt='profile' className=' w-200 h-200 rounded-2xl'></motion.img>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-6 ml-20'>
                            <h3 className='text-2xl font-semibold mb-6 ml-50 '>
                                My Journey
                            </h3>
                            <p className='text-gray-400 mb-6'>
                                My journey in software development started with an interest
                                in programming and problem-solving. I primarily work with
                                Java and Spring Boot, along with hands-on experience in
                                React.js and the MERN stack. Through building full-stack
                                projects, I have gained practical experience in developing
                                web applications, designing REST APIs, and working with
                                databases like MySQL and MongoDB.
                            </p>

                            <p className='text-gray-400 mb-6'>
                                Currently, I’m strengthening my backend development skills
                                and exploring system design while improving my problem-solving
                                abilities through Data Structures and Algorithms. I have solved
                                150+ problems on LeetCode and enjoy learning new technologies,
                                building practical projects, and continuously growing as a
                                software developer.
                            </p>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                {aboutInfo.map((data, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 rounded-2xl p-4
      transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                                    >
                                        <div className="text-purple-500 text-4xl mb-3">
                                            <data.icon />
                                        </div>

                                        <h3 className="text-white text-xl font-semibold mb-3">
                                            {data.title}
                                        </h3>

                                        <p className="text-gray-400">
                                            {data.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </motion.div>

                </div>



            </div>

        </motion.div>
    )
}

export default About
