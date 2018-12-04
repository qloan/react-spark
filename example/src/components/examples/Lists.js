import React from 'react'
import { Divider, List } from 'react-spark'

const Lists = () => (<>
  <h2>Lists</h2>

  <List className='extra-class' data-extra-attribute element='ul'>
    <li>Unordered List Item</li>
    <li>Unordered List Item</li>
    <li>Unordered List Item</li>
  </List>

  <List element='ol'>
    <li>Ordered List Item</li>
    <li>Ordered List Item</li>
    <li>Ordered List Item</li>
  </List>

  <Divider />

  <h3>Indented</h3>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna
    quis nulla ultrices, sed efficitur risus elementum.
  </p>

  <List element='ul' variant='indented'>
    <li>Indented Item</li>
    <li>Indented Item</li>
    <li>Indented Item</li>
  </List>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna
    quis nulla ultrices, sed efficitur risus elementum.
  </p>

  <Divider />

  <h3>Bare</h3>

  <List element='ul' variant='bare' size='medium'>
    <li>Bare List Item</li>
    <li>Bare List Item</li>
    <li>Bare List Item</li>
  </List>
</>)

export default Lists
