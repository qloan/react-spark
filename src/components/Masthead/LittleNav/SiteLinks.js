import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import BUTTON_VARIANTS from '../../Button/variants'
import NavItem from './NavItem'
import { sparkComponentClassName, sparkObjectClassName } from '../../../util'

class SiteLinks extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        buttonVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
        href: PropTypes.string,
        text: PropTypes.string,
        onClick: PropTypes.func,
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
          <NavItem key={i} link={link} id={`site-links-toggle-${i}`} />
        ))}
      </ul>
    )
  };
}

export default SiteLinks
