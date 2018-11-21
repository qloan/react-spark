import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName, sparkComponentClassName } from '../../util'

class WideNavigation extends React.Component {
  static defaultProps = {
    links: []
  }

  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      active: PropTypes.bool.isRequired,
      href: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })),
      text: PropTypes.string.isRequired
    }))
  }

  getLiClassName = link => {
    const {active} = link
    const activeClassName =
      sparkComponentClassName('WideNavigation', 'item', 'active')

    return classnames(
      sparkComponentClassName('WideNavigation', 'item'),
      {[activeClassName]: active}
    )
  }

  get subMenuLiClassName() {
    return [
      sparkComponentClassName('WideNavigation', 'item'),
      sparkComponentClassName('WideNavigation', 'item', 'sub')
    ].join(' ')
  }

  get subMenuLinkClassName() {
    return [
      sparkComponentClassName('WideNavigation', 'link'),
      sparkComponentClassName('WideNavigation', 'link', 'sub')
    ].join(' ')
  }

  get subMenuContainerClassName() {
    return [
      sparkComponentClassName('WideNavigation', 'sub-menu-container'),
      sparkClassName('utility', 'Display', null, 'none')
    ].join(' ')
  }

  get subMenuUlClassName() {
    return [
      sparkComponentClassName('WideNavigation', 'sub-menu-container'),
      sparkComponentClassName('WideNavigation', null, 'sub')
    ].join(' ')
  }

  renderLinks = () => {
    const {links} = this.props

    return links.map((link, i) => (
      <li
        className={this.getLiClassName(link)}
        key={i}
      >
        <a
          className={sparkComponentClassName('WideNavigation', 'link')}
          href={link.href}>
          {link.text}
        </a>
        {link.links && (
          <div className={this.subMenuContainerClassName}>
            <ul className={this.subMenuUlClassName}>
              {link.links.map((sublink, i) => (
                <li
                  className={this.subMenuLiClassName}
                  key={i}
                >
                  <a
                    className={this.subMenuLinkClassName}
                    href={sublink.href}
                  >
                    {sublink.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ))
  }

  render = () => (
    <div
      className={
        sparkComponentClassName('Masthead', 'wide-navigation-container')
      }
    >
      <nav role='navigation'>
        <ul
          className={sparkComponentClassName('WideNavigation')}
        >
          {this.renderLinks()}
        </ul>
      </nav>
    </div>
  )
}

export default WideNavigation
