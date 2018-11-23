import PropTypes from 'prop-types'
import React from 'react'

import WideNavigationItem from './WideNavigationItem'
import { sparkComponentClassName } from '../../../util/index'

class WideNavigation extends React.Component {
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

  renderItems = () => {
    const {links} = this.props

    return links.map((link, i) => (
      <WideNavigationItem
        active={link.active}
        href={link.href}
        key={i}
        links={link.links}
        text={link.text}
      />
    ))
  }

  render = () => (
    <div
      className={
        sparkComponentClassName('Masthead', 'wide-navigation-container')
      }
    >
      <nav role='navigation'>
        <ul className={sparkComponentClassName('WideNavigation')}>
          {this.renderItems()}
        </ul>
      </nav>
    </div>
  )
}

export default WideNavigation
