import React from 'react';
import { Masthead } from 'react-spark';

import './Masthead.scss';
import logo from '../../../assets/images/logo.png';

class MastheadExample extends React.Component {
  narrowNavigationLinks = [
    {
      active: false,
      href: '',
      links: [
        { href: '#', text: 'Item 1' },
        { href: '#', text: 'Item 2' },
        { href: '#', text: 'Item 3' }
      ],
      text: 'Talk To Us'
    },
    {
      active: true,
      href: '#',
      text: 'Talk To Us'
    },
    {
      active: false,
      href: '#',
      links: [
        { href: '#', text: 'Item 1' },
        { href: '#', text: 'Item 2' },
        { href: '#', text: 'Item 3' }
      ],
      text: 'Item 3'
    }
  ];
  loggedOut = {
    siteLinks: [
      { href: '#', text: 'About Us' },
      { href: '#', text: 'Reviews' }
    ],
    secondaryNavLinks: [
      { buttonVariant: 'secondary', href: '#', text: 'Sign In' },
      { buttonVariant: 'primary', href: '#', text: 'See My Options' }
    ],

    wideNavigationLinks: [
      {
        active: true,
        href: '#/item1',
        text: 'Item 1'
      },
      {
        active: false,
        href: '#',
        text: 'Item 2',
        links: [
          { href: '#', text: 'Item 1' },
          { href: '#', text: 'Item 2' },
          { href: '#', text: 'Item 3' }
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
          { href: '#', text: 'Item 1' },
          { href: '#', text: 'Item 2' },
          { href: '#', text: 'Item 3' }
        ]
      },
      {
        active: false,
        href: '#',
        text: 'Item 5'
      }
    ]
  };
  loggedIn = {
    siteLinks: [
      { href: '#/call', text: '(555) 555-5555', variant: 'standalone' },
      { href: '#/profile', text: 'My Profile' },
      { href: '#/dashboard', text: 'Dashboard' }
    ],
    secondaryNavLinks: [{ href: '#/user', icon: 'user' }]
  };
  render = () => (
    <>
      <div className='ReactSparkExample-Masthead'>
        <h2>Masthead</h2>
        <p>
          Note: toggle in example app does not currently work with two mastheads
          on one page. Remove one temporarily to see it function correctly
        </p>

        <br />
        <h4>Logged Out & Big Navigation</h4>
        <br />

        <Masthead
          className='extra-class'
          data-extra-attribute
          id='masthead-logged-out'
        >
          <Masthead.Content className='extra-class' data-extra-attribute>
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
              links={this.loggedOut.secondaryNavLinks}
              siteLinks={this.loggedOut.siteLinks}
            />
          </Masthead.Content>
          <Masthead.WideNavigation
            className='extra-class'
            data-extra-attribute
            links={this.loggedOut.wideNavigationLinks}
          />
          <Masthead.NarrowNavigation
            className='extra-class'
            data-extra-attribute
            links={this.narrowNavigationLinks}
          />
        </Masthead>

        <br />
        <h4>Logged In</h4>
        <br />

        <Masthead className='extra-class' id='masthead-logged-in'>
          <Masthead.Content className='extra-class' data-extra-attribute>
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
              links={this.loggedIn.secondaryNavLinks}
              siteLinks={this.loggedIn.siteLinks}
            />
          </Masthead.Content>
          <Masthead.NarrowNavigation
            className='extra-class'
            data-extra-attribute
            links={this.narrowNavigationLinks}
          />
        </Masthead>
      </div>
    </>
  );
}

export default MastheadExample
