import React from 'react'

import { Home, Skills, Projects, Contact } from './pages'
import { Navbar } from './components'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App