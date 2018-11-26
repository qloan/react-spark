import PropTypes from 'prop-types'
import React from 'react'

import NarrowNavigationItem from './NarrowNavigationItem'
import {
  sparkBaseClassName,
  sparkClassName,
  sparkComponentClassName
} from '../../../util/index'

class NarrowNavigation extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      active: PropTypes.bool.isRequired,
      href: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })),
      text: PropTypes.string.isRequired
    })).isRequired
  }

  get className() {
    return [
      sparkComponentClassName('Masthead', 'narrow-navigation-container'),
      sparkClassName('utility', 'Display', null, 'none')
    ].join(' ')
  }

  get ulClassName() {
    return [
      sparkComponentClassName('Accordion'),
      sparkComponentClassName('Accordion', null, 'navigation'),
      sparkBaseClassName('List'),
      sparkBaseClassName('List', null, 'bare')
    ].join(' ')
  }

  renderItems = () => {
    const {links} = this.props

    return links.map((link, i) => {
      const id = `masthead-narrow-nav-item-${i}`

      return (
        <NarrowNavigationItem
          active={link.active}
          href={link.href}
          key={i} // Maybe use id?
          id={id}
          links={link.links}
          text={link.text}
        />
      )
    })
  }

  render = () => (
    <div
      className={this.className}
      data-sprk-mobile-nav='mobileNav'
    >
      <nav role='navigation'>
        <ul className={this.ulClassName}>
          {this.renderItems()}
        </ul>
      </nav>
    </div>
  )
}

export default NarrowNavigation
