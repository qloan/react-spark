// TODO: Add support for search in <Masthead.Secondary>

import { masthead } from '@sparkdesignsystem/spark-core/components/masthead';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Content from './Content';
import Hamburger from './Hamburger';
import Logo from './Logo';
import NarrowNavigation from './NarrowNavigation';
import WideNavigation from './WideNavigation';
import SecondaryNav from './SecondaryNav';

import { sparkComponentClassName, sparkObjectClassName } from '../../util';

class Masthead extends React.Component {
  static defaultProps = {
    children: null
  };

  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount = () => {
    masthead()
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
        data-sprk-masthead
        {...props}
      >
        {children}
      </header>
    )
  };
}

Masthead.Content = Content
Masthead.Hamburger = Hamburger
Masthead.Logo = Logo
Masthead.NarrowNavigation = NarrowNavigation
Masthead.SecondaryNav = SecondaryNav
Masthead.WideNavigation = WideNavigation

export default Masthead
