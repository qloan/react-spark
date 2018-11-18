import React from 'react'
import { Button } from 'react-spark'

const Buttons = () => (<>
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
  <Button spinner>Spinner</Button>

  <p>Full Width at Small Viewport:</p>
  <Button fullWidthAtSmallViewport>Button</Button>
</>)

export default Buttons
