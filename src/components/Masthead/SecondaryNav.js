import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '../../components/Button'
import Link from '../../components/Link'
import Icon from '../../components/Icon/Icon'
import BUTTON_VARIANTS from '../Button/variants'
import {
  sparkComponentClassName,
  sparkObjectClassName,
  sparkClassName
} from '../../util'

class SecondaryNav extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        buttonVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
        href: PropTypes.string.isRequired,
        text: PropTypes.string,
        icon: PropTypes.string
      })
    ).isRequired
  };

  get className() {
    const { className } = this.props
    return classnames(
      sparkComponentClassName('Masthead', 'little-nav'),
      sparkObjectClassName('Stack'),
      sparkObjectClassName('Stack', 'item'),
      sparkObjectClassName('Stack', null, 'large'),
      sparkObjectClassName('Stack', null, 'split@s'),
      sparkObjectClassName('Stack', null, 'end-row'),
      sparkObjectClassName('Box'),
      sparkObjectClassName('Stack', 'item', 'flex@xxs'),
      {
        [className]: className
      }
    )
  }

  get ulClassName() {
    return [
      sparkObjectClassName('Stack', 'item'),
      sparkObjectClassName('HorizontalList'),
      sparkObjectClassName('HorizontalList', null, 'spacing-large'),
      sparkObjectClassName('Stack', null, 'center-column'),
      sparkClassName('utility', 'Position', null, 'relative')
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
    const { links } = this.props

    return links.map((link, i) => (
      <li key={i}>
        {link.buttonVariant ? (
          <Button href={link.href} variant={link.buttonVariant}>
            {link.text}
          </Button>
        ) : (
          <Link
            href={link.href}
            plain
            variant={link.variant}
            masthead={!link.variant}
          >
            {link.text ? (
              link.text
            ) : (
              <Icon name={link.icon} size={Icon.size.L} color='base' />
            )}
          </Link>
        )}
      </li>
    ))
  };

  render = () => {
    const { className, links, ...props } = this.props

    return (
      <nav role='navigation' className={this.className} {...props}>
        <ul className={this.ulClassName} style={this.ulStyle}>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  };
}

export default SecondaryNav
