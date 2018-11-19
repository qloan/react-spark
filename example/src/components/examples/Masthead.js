import React from 'react'
import { Masthead } from 'react-spark'

const MastheadExample = () => (<>
  <h2>Masthead</h2>

  <Masthead
    id='main-nav'
    logoHref='#nogo'
    logoPath='https://seeklogo.com/images/G/generic-logo-EE8C8E244E-seeklogo.com.png'
    links={[
      {title: 'Personal Loans', href: '#nogog'},
      {title: 'About Us', href: '#sdfg'},
      {title: 'Reviews', href: '#dfg'}
    ]}
  />
</>)

export default MastheadExample
