import {
  bindUIEvents
} from '@sparkdesignsystem/spark-core/components/wide-navigation'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName, sparkComponentClassName } from '../../../util'

class WideNavigationItem extends React.Component {
  static defaultProps = {
    active: false
  }

  liRef = React.createRef()

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })),
    text: PropTypes.string.isRequired
  }

  componentDidMount = () => {
    bindUIEvents(this.liRef.current)
  }

  getClassName = active => {
    const activeClassName =
      sparkComponentClassName('WideNavigation', 'item', 'active')

    return classnames(
      sparkComponentClassName('WideNavigation', 'item'),
      {[activeClassName]: active}
    )
  }

  get subMenuContainerClassName() {
    return [
      sparkComponentClassName('WideNavigation', 'sub-menu-container'),
      sparkClassName('utility', 'Display', null, 'none')
    ].join(' ')
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

  get subMenuUlClassName() {
    return [
      sparkComponentClassName('WideNavigation'),
      sparkComponentClassName('WideNavigation', null, 'sub')
    ].join(' ')
  }

  /**
   * @returns {boolean}
   */
  get hasLinks() {
    return !!(this.props.links && this.props.links.length)
  }

  render = () => {
    const {active, href, text, links} = this.props

    let conditionalLiProps = {}

    if (this.hasLinks) {
      conditionalLiProps = {
        ...conditionalLiProps,
        'aria-haspopup': true,
        'aria-expanded': false
      }
    }

    return (
      <li
        className={this.getClassName(active)}
        ref={this.liRef}
        {...conditionalLiProps}
      >
        <a
          className={sparkComponentClassName('WideNavigation', 'link')}
          href={href}
        >
          {text}
        </a>
        {this.hasLinks && (
          <div className={this.subMenuContainerClassName}>
            <ul className={this.subMenuUlClassName}>
              {links.map((sublink, i) => (
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
    )
  }
}

export default WideNavigationItem
