import React, { Component } from 'react'

import { Button, Link } from 'react-spark'

import './App.scss'

export default class App extends Component {
  renderButtons = () => (<>
    <p>Default:</p>
    <Button>Default</Button>

    <p>Secondary:</p>
    <Button type={'secondary'}>Secondary</Button>

    <p>Secondary:</p>
    <Button type={'tertiary'}>Tertiary</Button>

    <p>Disabled:</p>
    <Button disabled>Disabled</Button>

    <p>Spinner:</p>
    <Button spinner>Spinner</Button>

    <p>Full Width at Small Viewport:</p>
    <Button
      fullWidthAtSmallViewport
      onClick={() => console.log('full-width button clicked')}
    >
      Button
    </Button>
  </>)

  renderLinks = () => (<>
    <p>Inline:</p>
    <Link href='#nogo'>Inline</Link>

    <p>Standalone:</p>
    <Link href='#nogo' type='standalone'>Standalone</Link>

    <p>Disabled:</p>
    <Link href='#nogo' disabled>Disabled</Link>
  </>)

  render = () => {
    return (<>
      <h1>React Spark</h1>

      <hr />

      <h2>Button</h2>

      {this.renderButtons()}

      <hr />

      <h2>Link</h2>

      {this.renderLinks()}
    </>)
  }
}
