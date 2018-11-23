import { NavLink } from 'react-router-dom'
import React from 'react'

import './Nav.scss'

const Nav = () => (<>
  <span className='sprk-c-Divider' />

  <nav className='ReactSparkExample-Nav'>
    <ul>
      <li><NavLink to='/alerts'>Alerts</NavLink></li>
      <li><NavLink to='/accordions'>Accordions</NavLink></li>
      <li><NavLink to='/buttons'>Buttons</NavLink></li>
      <li><NavLink to='/cards'>Cards</NavLink></li>
      <li><NavLink to='/dictionaries'>Dictionaries</NavLink></li>
      <li><NavLink to='/dividers'>Dividers</NavLink></li>
      <li><NavLink to='/footer'>Footer</NavLink></li>
      <li><NavLink to='/grid'>Grid</NavLink></li>
      <li><NavLink to='/inputs'>Inputs</NavLink></li>
      <li><NavLink to='/icons'>Icons</NavLink></li>
      <li><NavLink to='/layout'>Layout</NavLink></li>
      <li><NavLink to='/links'>Links</NavLink></li>
      <li><NavLink to='/masthead'>Masthead</NavLink></li>
      <li><NavLink to='/modals'>Modals</NavLink></li>
      <li><NavLink to='/tables'>Tables</NavLink></li>
      <li><NavLink to='/toggles'>Toggles</NavLink></li>
    </ul>
  </nav>

  <span className='sprk-c-Divider' />
</>)

export default Nav
