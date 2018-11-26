import React from 'react'
import { List } from 'react-spark'

const Lists = () => (<>
  <h2>Lists</h2>

  <br />
  <h5>Information:</h5>
  <List listType='list' dataId='unordered-list-1' text='Bare List Item' listItemId='list-item-1' />
  <List listType='list' dataId='ordered-list-1' text='Ordered List Item' listItemId='list-item-4' />

  <br />
  <h5>Indented:</h5>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum.
  </p>
  <List listType='indented' dataId='unordered-list-1' text='Indented Item' listItemId='list-item-7' />
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum.
  </p>

  <br />
  <h5>Bare:</h5>
  <List listType='bare' dataId='unordered-list-1' text='Bare List Item' listItemId='list-item-10' />
</>)

export default Lists
