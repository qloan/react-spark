import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Button from '../../Button'
import Link from '../../Link'
import Icon from '../../Icon/Icon'
import BUTTON_VARIANTS from '../../Button/variants'
import { sparkComponentClassName, sparkObjectClassName } from '../../../util'

class SiteLinks extends React.Component {
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
      sparkComponentClassName('Masthead', 'site-links'),
      sparkObjectClassName('Stack', 'item'),
      sparkObjectClassName('HorizontalList'),
      sparkObjectClassName('HorizontalList', null, 'spacing-large'),
      sparkObjectClassName('Stack', 'item', 'center-column'),
      {
        [className]: className
      }
    )
  }

  render = () => {
    const { className, links, ...props } = this.props

    return (
      <ul className={this.className} {...props}>
        {links.map((link, i) => (
          <li key={i}>
            {link.buttonVariant ? (
              <Button
                href={link.href}
                variant={link.buttonVariant}
                className='sprk-c-Button--compact'
              >
                {link.text}
              </Button>
            ) : (
              <Link href={link.href} plain variant={link.variant} masthead>
                {link.text ? (
                  link.text
                ) : (
                  <Icon name={link.icon} size={Icon.size.L} color='base' />
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    )
  };
}

export default SiteLinks
