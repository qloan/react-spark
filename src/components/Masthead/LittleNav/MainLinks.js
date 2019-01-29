import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import BUTTON_VARIANTS from '../../Button/variants'
import NavItem from './NavItem'
import { sparkClassName, sparkObjectClassName } from '../../../util'

class MainLinks extends React.Component {
  static defaultProps = {
    links: []
  };
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        buttonVariant: PropTypes.oneOf(
          Object.keys(BUTTON_VARIANTS).map(itm => BUTTON_VARIANTS[itm])
        ),
        href: PropTypes.string,
        onClick: PropTypes.func,
        text: PropTypes.string,
        icon: PropTypes.string
      })
    )
  };

  get className() {
    const { className } = this.props
    return classnames(
      sparkObjectClassName('Stack', 'item'),
      sparkObjectClassName('HorizontalList'),
      sparkObjectClassName('HorizontalList', null, 'spacing-medium'),
      sparkObjectClassName('Stack', null, 'center-column'),
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
          <NavItem key={i} link={link} id={`main-links-toggle-${i}`} />
        ))}
      </ul>
    )
  };
}

export default MainLinks
