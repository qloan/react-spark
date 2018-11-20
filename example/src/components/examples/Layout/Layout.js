import React from 'react'
import { Box, CenteredColumn, Flag } from 'react-spark'

import './Layout.scss'
import img from '../../../assets/images/flag-img.jpg'

const Layout = () => (<>
  <h2>Layout</h2>

  <p>Box object:</p>
  <Box />

  <p>Box object sizing:</p>
  <Box padding='flush'>Flush</Box>
  <Box padding='tiny'>Tiny</Box>
  <Box padding='small'>Small</Box>
  <Box padding='large'>Large</Box>
  <Box padding='huge'>Huge</Box>

  <p>Centered column:</p>
  <CenteredColumn />

  <p>Flag object:</p>
  <Flag>
    <Flag.Figure>
      <img alt='Provide useful alternative text' src={img} />
    </Flag.Figure>
    <Flag.Body>
      <p>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
        inventore integer eum non enim diam habitant. Maecenas nunc per lacus
        neque egestas. Diam quod curabitur. Porttitor vel est id massa posuere
        tortor fringilla est.
      </p>
    </Flag.Body>
  </Flag>
</>)

export default Layout
