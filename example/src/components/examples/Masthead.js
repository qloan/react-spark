import React from 'react'
import { Masthead } from 'react-spark'

const MastheadExample = () => (<>
  <h2>Masthead</h2>

  <Masthead>
    <Masthead.Content>
      <Masthead.TopRow>
        <Masthead.Hamburger />
        <Masthead.Logo
          href='/'
          imgAlt='Placeholder'
          imgSrc='//via.placeholder.com/262x55?text=Logo'
          screenReaderText='Go to the home page'
        />
        <Masthead.SecondaryNav
          links={[
            {href: '#', text: 'Item 1'},
            {href: '#', text: 'Item 2'},
            {href: '#', text: 'Item 3'}
          ]}
        />
      </Masthead.TopRow>
      <Masthead.Secondary />
    </Masthead.Content>
    <Masthead.Navigation>
      <Masthead.WideNavigation
        links={[
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
              {
                href: '#',
                text: 'Item 1'
              }
            ]
          }
        ]}
      />
      <Masthead.NarrowNavigation
        links={[
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
          }
        ]}
      />
    </Masthead.Navigation>
  </Masthead>
</>)

export default MastheadExample
