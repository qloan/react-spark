// TODO: Add support for search in <Masthead.Secondary>

import { masthead } from '@sparkdesignsystem/spark-core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Content from './Content'
import Hamburger from './Hamburger'
import Logo from './Logo'
import NarrowNav from './NarrowNav'
import BigNav from './BigNav'
import SessionLinks from './SessionLinks'
import LittleNav from './LittleNav/LittleNav'

import { sparkComponentClassName, sparkObjectClassName } from '../../util'

class Masthead extends React.Component {
  static defaultProps = {
    children: null
  };

  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount = () => {
    if (!window.initMasthead) {
      masthead()
      window.initMasthead = true
    }
  };

  get className() {
    const { className } = this.props
    return classnames(
      sparkComponentClassName('Masthead'),
      sparkObjectClassName('Stack'),
      { [className]: className }
    )
  }

  render = () => {
    const { children, className, ...props } = this.props

    return (
      <header
        data-sprk-main
        className={this.className}
        role='banner'
        data-sprk-masthead=''
        {...props}
      >
        {children}
      </header>
    )
  };
}

/**
 * DEPRECATED START
 */
Masthead.SecondaryNav = LittleNav
Masthead.WideNavigation = BigNav
Masthead.NarrowNavigation = NarrowNav
/**
 * DEPRECATED END
 */

Masthead.Content = Content
Masthead.Hamburger = Hamburger
Masthead.Logo = Logo
Masthead.BigNav = BigNav
Masthead.LittleNav = LittleNav
Masthead.SessionLinks = SessionLinks
Masthead.NarrowNav = NarrowNav

export default Masthead
