import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Buttons from './components/examples/Buttons'
import Cards from './components/examples/Cards'
import Dictionaries from './components/examples/Dictionaries'
import Grid from './components/examples/Grid'
import Inputs from './components/examples/Inputs'
import Links from './components/examples/Links'
import Nav from './components/Nav'
import Tables from './components/examples/Tables'

import './App.scss'

export default class App extends Component {
  render = () => {
    return (
      <Router>
        <>
          <h1>React Spark</h1>
          <Nav />

          <Route path='/buttons' component={Buttons} />
          <Route path='/cards' component={Cards} />
          <Route path='/dictionaries' component={Dictionaries} />
          <Route path='/grid' component={Grid} />
          <Route path='/inputs' component={Inputs} />
          <Route path='/links' component={Links} />
          <Route path='/tables' component={Tables} />
        </>
      </Router>
    )
  }
}
