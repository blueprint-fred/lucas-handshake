import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Index from './pages';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Index}/>
    </Router>
  )
}

export default App
