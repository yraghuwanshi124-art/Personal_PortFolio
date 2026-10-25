
import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation()

  // Scroll to top when navigating between routes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  return (
    <div className="app min-h-screen bg-[#09090F] text-slate-100 transition-colors duration-300">
      <Navbar />

      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/My_Portfolio/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
