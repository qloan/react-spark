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

      <Masthead className='extra-class' data-extra-attribute>
        <Masthead.Content className='extra-class' data-extra-attribute>
          <Masthead.TopRow className='extra-class' data-extra-attribute>
            <Masthead.Hamburger className='extra-class' data-extra-attribute />
            <Masthead.Logo
              className='extra-class'
              data-extra-attribute
              href='/masthead'
              imgAlt='Placeholder'
              imgSrc={logo}
              screenReaderText='Go to the home page'
            />
            <Masthead.SecondaryNav
              className='extra-class'
              data-extra-attribute
              links={this.secondaryNavLinks}
            />
          </Masthead.TopRow>
          <Masthead.Secondary className='extra-class' data-extra-attribute />
        </Masthead.Content>
        <Masthead.Navigation className='extra-class' data-extra-attribute>
          <Masthead.WideNavigation
            className='extra-class'
            data-extra-attribute
            links={this.wideNavigationLinks}
          />
          <Masthead.NarrowNavigation
            className='extra-class'
            data-extra-attribute
            links={this.narrowNavigationLinks}
          />
        </Masthead.Navigation>
      </Masthead>
    </div>
  </>)
}

export default MastheadExample
