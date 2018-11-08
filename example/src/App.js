import React, { Component } from 'react'

import { Button } from 'react-spark'

import './App.scss'

export default class App extends Component {
  render() {
    return (<>
      <h1>React Spark</h1>

      <h2>Button</h2>

      <h3>Default</h3>
      <Button>Default</Button>

      <h3>Secondary</h3>
      <Button type={'secondary'}>Secondary</Button>

      <h3>Secondary</h3>
      <Button type={'tertiary'}>Tertiary</Button>

      <h3>Disabled</h3>
      <Button disabled>Disabled</Button>

      <h3>Spinner</h3>

      <Button spinner>Spinner</Button>

      <h3>Full Width at Small Viewport</h3>
      <Button
        fullWidthAtSmallViewport
        onClick={() => console.log('full-width button clicked')}
      >
        Button
      </Button>
    </>)
  }
}
