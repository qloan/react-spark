import { NavLink } from 'react-router-dom'
import React from 'react'

import './Nav.scss'

const Nav = () => (<>
  <hr />
  <nav>
    <ul>
      <li><NavLink to='/buttons'>Buttons</NavLink></li>
      <li><NavLink to='/dictionaries'>Dictionaries</NavLink></li>
      <li><NavLink to='/inputs'>Inputs</NavLink></li>
      <li><NavLink to='/layout'>Layout</NavLink></li>
      <li><NavLink to='/links'>Links</NavLink></li>
      <li><NavLink to='/tables'>Tables</NavLink></li>
    </ul>
  </nav>
  <hr />
</>)

export default Nav
