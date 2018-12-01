import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  Accordions,
  Alerts,
  Buttons,
  Cards,
  Dictionaries,
  Dividers,
  Footer,
  Grid,
  Icons,
  Inputs,
  Layout,
  Links,
  Lists,
  Masthead,
  Modals,
  Tables,
  Toggles,
  Typography
} from './components/examples'
import Nav from './components/Nav'

import './App.scss'

export default class App extends Component {
  componentDidMount() {
    document.body.classList.add('sprk-u-JavaScript')
  }
  render = () => {
    return (
      <Router>
        <>
          <h1>react-spark</h1>
          <Nav />

          <Route path='/alerts' component={Alerts} />
          <Route path='/accordions' component={Accordions} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/cards' component={Cards} />
          <Route path='/dictionaries' component={Dictionaries} />
          <Route path='/dividers' component={Dividers} />
          <Route path='/footer' component={Footer} />
          <Route path='/grid' component={Grid} />
          <Route path='/inputs' component={Inputs} />
          <Route path='/icons' component={Icons} />
          <Route path='/layout' component={Layout} />
          <Route path='/links' component={Links} />
          <Route path='/lists' component={Lists} />
          <Route path='/masthead' component={Masthead} />
          <Route path='/modals' component={Modals} />
          <Route path='/tables' component={Tables} />
          <Route path='/toggles' component={Toggles} />
          <Route path='/typography' component={Typography} />
        </>
      </Router>
    )
  }
}
