import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Index from './pages';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>
    </Router>
  )
}

export default App
