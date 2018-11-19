import React from 'react'
import { Button } from 'react-spark'

class Buttons extends React.Component {
  state = {spin: false}

  render = () => (<>
    <h2>Buttons</h2>

    <p>Default:</p>
    <Button>Default</Button>

    <p>Secondary:</p>
    <Button variant={'secondary'}>Secondary</Button>

    <p>Secondary:</p>
    <Button variant={'tertiary'}>Tertiary</Button>

    <p>Disabled:</p>
    <Button disabled>Disabled</Button>

    <p>Spinner:</p>
    <button
      onClick={() => {
        this.setState({spin: !this.state.spin})
      }}
    >
      spin
    </button>
    <Button spinner={this.state.spin}>Spinner</Button>

    <p>Full Width at Small Viewport:</p>
    <Button
      fullWidthAtSmallViewport
      onClick={() => console.log('full-width button clicked')}
    >
      Button
    </Button>
  </>)
}

export default Buttons
