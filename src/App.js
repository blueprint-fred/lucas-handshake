import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Index from './pages';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Index/>
    </Router>
  )
}

export default App
