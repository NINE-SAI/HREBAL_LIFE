import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import Navbar from './NAA_BONDA.jsx/Navbar'
import Task from './NAA_BONDA.jsx/Task'
import {  Navigate } from "react-router-dom"


const App = () => {
  return (
    <div>
      <Router>
      <nav>
        <Link to="/home">SAI</Link>
      <Navigate to="/home"/>
      </nav>
      {/* <Navbar/> */}
      <Task/>
      </Router>
    </div>
  )
}

export default App