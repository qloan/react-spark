import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkBaseClassName,
  sparkClassName,
  sparkComponentClassName
} from '../../util'

class NarrowNavigation extends React.Component {
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

  get className() {
    return [
      sparkComponentClassName('Masthead', 'narrow-navigation-container'),
      sparkClassName('utility', 'Display', null, 'none')
    ].join(' ')
  }

  getLiClassName = link => {
    const {active} = link
    const activeClassName =
      sparkComponentClassName('Accordion', 'item', 'active')

    return classnames(
      sparkComponentClassName('Accordion', 'item'),
      {[activeClassName]: active}
    )
  }

  get spanClassName() {
    return [
      sparkBaseClassName('TypeBodyTwo'),
      sparkComponentClassName('Accordion', 'heading'),
      sparkClassName('utility', 'pam')
    ].join(' ')
  }

  get subMenuLinkClassName() {
    return [
      sparkComponentClassName('Link'),
      sparkComponentClassName('Link', null, 'standalone')
    ].join(' ')
  }

  get subMenuUlClassName() {
    return [
      sparkBaseClassName('List'),
      sparkBaseClassName('List', null, 'bare'),
      sparkComponentClassName('Accordion', 'details')
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

  renderLinks = () => {
    const {links} = this.props

    return links.map((link, i) => {
      const id = `masthead-narrow-nav-item-${i}`

      return (
        <li
          className={this.getLiClassName(link)}
          data-sprk-toggle='container'
          key={i}
        >
          <a
            aria-controls={link.links ? id : ''}
            className={sparkComponentClassName('Accordion', 'summary')}
            data-sprk-toggle={link.links ? 'trigger' : ''}
            data-sprk-toggle-type={link.links ? 'accordion' : ''}
            href={link.href}>
            <span className={this.spanClassName}>{link.text}</span>
            {/* TODO: Add chevron icon */}
          </a>
          {link.links && (
            <ul
              className={this.subMenuUlClassName}
              data-spark-toggle='content'
              id={id}
            >
              {link.links.map((sublink, i) => (
                <li key={i}>
                  <a
                    className={this.subMenuLinkClassName}
                    href={sublink.href}
                  >
                    {sublink.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      )
    })
  }

  render = () => {
    const {links} = this.props

    return (
      <div
        className={this.className}
        data-sprk-mobile-nav='mobileNav'
      >
        <nav role='navigation'>
          {/* TODO: Replace with accordion component, once it's built? */}
          <ul className={this.ulClassName}>
            {this.renderLinks()}
          </ul>
        </nav>
      </div>
    )
  }
}

export default NarrowNavigation
