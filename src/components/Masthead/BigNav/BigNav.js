import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import BigNavItem from './BigNavItem'
import {
  sparkComponentClassName,
  sparkObjectClassName
} from '../../../util'
import List from '../../List/List'

class BigNav extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool.isRequired,
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };

  get ulClassName() {
    return classnames(
      sparkComponentClassName('Masthead', 'big-nav-items'),
      sparkObjectClassName('Stack'),
      sparkObjectClassName('Stack', null, 'split@xxs')
    )
  }

  renderItems = () => {
    const { links } = this.props

    return links.map((link, i) => (
      <BigNavItem
        active={link.active}
        href={link.href}
        key={i}
        links={link.links}
        text={link.text}
        id={i.toString()}
      />
    ))
  };

  render = () => {
    const { className, ...props } = this.props

    return (
      <div className={sparkComponentClassName('Stack', 'item')} {...props}>
        <nav
          role='navigation'
          className={sparkComponentClassName('Masthead', 'big-nav')}
        >
          <List
            variant='bare'
            className={this.ulClassName}
            data-sprk-navigation='big'
          >
            {this.renderItems()}
          </List>
        </nav>
      </div>
    )
  };
}

export default BigNav
