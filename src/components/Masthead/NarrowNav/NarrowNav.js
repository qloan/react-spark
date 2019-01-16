import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import NarrowNavItem from './NarrowNavItem';
import {
  sparkBaseClassName,
  sparkClassName,
  sparkComponentClassName
} from '../../../util/index';

class NarrowNav extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool,
        href: PropTypes.string,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            target: PropTypes.string
          })
        ),
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };

  get className() {
    const { className } = this.props

    return classnames(
      sparkComponentClassName('Masthead', 'narrow-nav'),
      sparkClassName('utility', 'Display', null, 'none'),
      { [className]: className }
    )
  }

  get ulClassName() {
    return [
      sparkComponentClassName('MastheadAccordion'),
      sparkBaseClassName('List'),
      sparkBaseClassName('List', null, 'bare')
    ].join(' ')
  }

  render = () => {
    const { className, links, ...props } = this.props

    return (
      <nav
        role='navigation'
        className={this.className}
        data-sprk-mobile-nav='mobileNav'
        {...props}
      >
        <ul className={this.ulClassName}>
          {links.map((link, i) => (
            <NarrowNavItem
              key={`masthead-narrow-nav-item-${i}`}
              id={`masthead-narrow-nav-item-${i}`}
              link={link}
            />
          ))}
        </ul>
      </nav>
    )
  };
}

export default NarrowNav
