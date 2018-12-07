import {
  bindToggleUIEvents
} from '@sparkdesignsystem/spark-core/components/toggle'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkClassName,
  sparkBaseClassName,
  sparkComponentClassName
} from '../../../util/index'

class NarrowNavItem extends React.Component {
  liRef = React.createRef()

  static propTypes = {
    active: PropTypes.bool.isRequired,
    href: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })),
    text: PropTypes.string.isRequired
  }

  componentDidMount = () => {
    if (this.hasLinks) bindToggleUIEvents(this.liRef.current)
  }

  /**
   * @returns {boolean}
   */
  get hasLinks() {
    return !!(this.props.links && this.props.links.length)
  }

  getLiClassName = active => {
    const activeClassName =
      sparkComponentClassName('Accordion', 'item', 'active')

    return classnames(
      sparkComponentClassName('Accordion', 'item'),
      {[activeClassName]: active}
    )
  }

  get subMenuLinkClassName() {
    return [
      sparkBaseClassName('Link'),
      sparkBaseClassName('Link', null, 'standalone'),
      sparkClassName('utility', 'pam')
    ].join(' ')
  }

  get spanClassName() {
    return [
      sparkBaseClassName('TypeBodyTwo'),
      sparkComponentClassName('Accordion', 'heading')
    ].join(' ')
  }

  get subMenuUlClassName() {
    return [
      sparkBaseClassName('List'),
      sparkBaseClassName('List', null, 'bare'),
      sparkComponentClassName('Accordion', 'details')
    ].join(' ')
  }

  get svgClassName() {
    return [
      sparkComponentClassName('Icon'),
      sparkComponentClassName('Icon', null, 'l'),
      sparkComponentClassName('Accordion', 'icon')
    ].join(' ')
  }

  renderChevronSvg = () => (
    <svg
      className={this.svgClassName}
      data-sprk-toggle='icon'
      viewBox='0 0 64 64'
      width='100%'
      height='100%'
    >
      <path
        d='M17.4 25.7L32 40.3l14.6-14.6'
        fill='none'
        strokeMiterlimit='10'
      />
    </svg>
  )

  render = () => {
    const {active, href, id, links, text} = this.props

    let conditionalAnchorProps = {}

    if (this.hasLinks) {
      conditionalAnchorProps = {
        ...conditionalAnchorProps,
        'aria-controls': id,
        'data-sprk-toggle': 'trigger',
        'data-sprk-toggle-type': 'accordion'
      }
    }

    return (
      <li
        className={this.getLiClassName(active)}
        ref={this.liRef}
      >
        <a
          className={sparkComponentClassName('Accordion', 'summary')}
          href={href}
          {...conditionalAnchorProps}
        >
          <span className={this.spanClassName}>{text}</span>
          {this.hasLinks && this.renderChevronSvg()}
        </a>
        {this.hasLinks && (
          <ul
            className={this.subMenuUlClassName}
            data-sprk-toggle='content'
            id={id}
          >
            {links.map((sublink, i) => (
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
  }
}

export default NarrowNavItem
