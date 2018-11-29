import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '../../components/Button'
import Link from '../../components/Link'

import BUTTON_VARIANTS from '../Button/variants'
import {
  sparkComponentClassName,
  sparkObjectClassName
} from '../../util'

class SecondaryNav extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      buttonVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Masthead', 'secondary-nav'),
      {[className]: className}
    )
  }

  get ulClassName() {
    return [
      sparkComponentClassName('SecondaryNavigation'),
      sparkObjectClassName('HorizontalList'),
      sparkObjectClassName('HorizontalList', null, 'spacing-medium')
    ].join(' ')
  }

  /**
   * Because Spark doesn't (at the moment) support buttons in the secondary nav
   *
   * @return {object}
   */
  get ulStyle() {
    return {
      WebkitBoxAlign: 'center',
      msFlexAlign: 'center',
      alignItems: 'center'
    }
  }

  renderLinks = () => {
    const {links} = this.props

    return links.map((link, i) => (
      <li key={i}>
        {link.buttonVariant ? (
          <Button href={link.href} variant={link.buttonVariant}>
            {link.text}
          </Button>
        ) : (
          <Link href={link.href} variant='standalone'>
            {link.text}
          </Link>
        )}
      </li>
    ))
  }

  render = () => {
    const {className, links, ...props} = this.props

    return (
      <div className={this.className} {...props}>
        <nav role='navigation'>
          <ul
            className={this.ulClassName}
            style={this.ulStyle}
          >
            {this.renderLinks()}
          </ul>
        </nav>
      </div>
    )
  }
}

export default SecondaryNav
