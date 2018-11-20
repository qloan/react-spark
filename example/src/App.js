import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Alerts from './components/examples/Alerts'
import Buttons from './components/examples/Buttons'
import Cards from './components/examples/Cards'
import Dictionaries from './components/examples/Dictionaries'
import Footer from './components/examples/Footer'
import Grid from './components/examples/Grid'
import Inputs from './components/examples/Inputs'
import Layout from './components/examples/Layout'
import Links from './components/examples/Links'
import Masthead from './components/examples/Masthead'
import Modals from './components/examples/Modals'
import Nav from './components/Nav'
import Tables from './components/examples/Tables'

import './App.scss'
import SparkSVGs from './assets/images/D-SparkCoreIcons.svg'

export default class App extends Component {
  render = () => {
    return (
      <Router>
        <>
          <h1>React Spark</h1>
          <Nav />

          <Route path='/alerts' component={Alerts} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/cards' component={Cards} />
          <Route path='/dictionaries' component={Dictionaries} />
          <Route path='/footer' component={Footer} />
          <Route path='/grid' component={Grid} />
          <Route path='/inputs' component={Inputs} />
          <Route path='/layout' component={Layout} />
          <Route path='/links' component={Links} />
          <Route path='/masthead' component={Masthead} />
          <Route path='/modals' component={Modals} />
          <Route path='/tables' component={Tables} />
        </>
      </Router>
    )
  };
}
