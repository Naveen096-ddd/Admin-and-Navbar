import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Admin from './components/pages/Admin'
import AdminData from './components/pages/AdminData'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
