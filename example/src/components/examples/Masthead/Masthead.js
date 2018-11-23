import React from 'react'
import { Masthead } from 'react-spark'

import './Masthead.scss'
import logo from '../../../assets/images/logo.png'

class MastheadExample extends React.Component {
  narrowNavigationLinks = [
    {
      active: false,
      href: '#',
      links: [
        {href: '#', text: 'Item 1'},
        {href: '#', text: 'Item 2'},
        {href: '#', text: 'Item 3'}
      ],
      text: 'Item 1'
    },
    {
      active: true,
      href: '#',
      text: 'Item 1'
    },
    {
      active: false,
      href: '#',
      links: [
        {href: '#', text: 'Item 1'},
        {href: '#', text: 'Item 2'},
        {href: '#', text: 'Item 3'}
      ],
      text: 'Item 3'
    }
  ]

  secondaryNavLinks = [
    {href: '#', text: 'Item 1'},
    {buttonVariant: 'secondary', href: '#', text: 'Item 2'},
    {buttonVariant: 'primary', href: '#', text: 'Item 3'}
  ]

  wideNavigationLinks = [
    {
      active: true,
      href: '#',
      text: 'Item 1'
    },
    {
      active: false,
      href: '#',
      text: 'Item 2',
      links: [
        {href: '#', text: 'Item 1'},
        {href: '#', text: 'Item 2'},
        {href: '#', text: 'Item 3'}
      ]
    },
    {
      active: false,
      href: '#',
      text: 'Item 3'
    },
    {
      active: false,
      href: '#',
      text: 'Item 4',
      links: [
        {href: '#', text: 'Item 1'},
        {href: '#', text: 'Item 2'},
        {href: '#', text: 'Item 3'}
      ]
    },
    {
      active: false,
      href: '#',
      text: 'Item 5'
    }
  ]

  render = () => (<>
    <div className='ReactSparkExample-Masthead'>
      <h2>Masthead</h2>

      <Masthead>
        <Masthead.Content>
          <Masthead.TopRow>
            <Masthead.Hamburger />
            <Masthead.Logo
              href='/masthead'
              imgAlt='Placeholder'
              imgSrc={logo}
              screenReaderText='Go to the home page'
            />
            <Masthead.SecondaryNav links={this.secondaryNavLinks} />
          </Masthead.TopRow>
          <Masthead.Secondary />
        </Masthead.Content>
        <Masthead.Navigation>
          <Masthead.WideNavigation links={this.wideNavigationLinks} />
          <Masthead.NarrowNavigation links={this.narrowNavigationLinks} />
        </Masthead.Navigation>
      </Masthead>
    </div>
  </>)
}

export default MastheadExample
