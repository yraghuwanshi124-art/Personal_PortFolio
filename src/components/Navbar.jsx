import React from 'react'


const Navbar = () => {
  return (
    <nav className='fixed w-full z-50 bg[#1a1a1a] py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href='#' className='text-3xl font-bold text-white'>
                Honey
                <span className='text-3xl text-purple-500 font-bold'>Aswani</span>
                <div className='w-4 h-4 bg-purple-500 rounded-full'></div>
                </a>
            </div> 

            <div className='hidden md:flex space-x-10'>
                <a href='#home' className ='relative group text-white-500  transition-duration-300 hover:text-purple-500'>
                    <span className='text-xl'>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#about' className ='relative group text-white-500  transition-duration-300 hover:text-purple-500'>
                    <span className='text-xl'>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#skills' className ='relative group text-white-500  transition-duration-300 hover:text-purple-500'>
                    <span className='text-xl'>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#project' className ='relative group text-white-500  transition-duration-300 hover:text-purple-500'>
                    <span className='text-xl'>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#experience' className ='relative group text-white-500  transition-duration-300 hover:text-purple-500'>
                    <span className='text-xl'>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#contacts' className ='relative group text-white-500  transition-duration-300 hover:text-purple-500'>
                    <span className='text-xl'>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>



        </div>


    </nav>
  )
}

export default Navbar
