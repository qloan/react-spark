// TODO: Add support for search in <Masthead.Secondary>

import {
  masthead,
  hideMobileNavs
} from '@sparkdesignsystem/spark-core/components/masthead'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Content from './Content'
import Hamburger from './Hamburger'
import Logo from './Logo'
import NarrowNavigation from './NarrowNavigation'
import Navigation from './Navigation'
import WideNavigation from './WideNavigation'
import Secondary from './Secondary'
import SecondaryNav from './SecondaryNav'
import TopRow from './TopRow'

import { sparkComponentClassName } from '../../util'

class Masthead extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  componentDidMount = () => {
    masthead()
    window.onresize = () => {
      hideMobileNavs()
    }
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Masthead'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return (
      <div data-sprk-main>
        <header
          className={this.className}
          role='banner'
          {...props}
        >
          {children}
        </header>
      </div>
    )
  }
}

Masthead.Content = Content
Masthead.Hamburger = Hamburger
Masthead.Logo = Logo
Masthead.Navigation = Navigation
Masthead.NarrowNavigation = NarrowNavigation
Masthead.Secondary = Secondary
Masthead.SecondaryNav = SecondaryNav
Masthead.TopRow = TopRow
Masthead.WideNavigation = WideNavigation

export default Masthead
