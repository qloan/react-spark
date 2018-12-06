// import {
//   bindUIEvents
// } from '@sparkdesignsystem/spark-core/components/wide-navigation'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../../Icon/Icon';
import Link from '../../Link/Link';

import {
  sparkClassName,
  sparkComponentClassName,
  sparkObjectClassName
} from '../../../util';

class WideNavigationItem extends React.Component {
  static defaultProps = {
    active: false
  };

  liRef = React.createRef();

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ),
    text: PropTypes.string.isRequired
  };

  componentDidMount = () => {
    // bindUIEvents(this.liRef.current)
  };

  getClassName = active => {
    const activeClassName = sparkComponentClassName(
      'Masthead',
      'big-nav-item',
      'active'
    )

    return classnames(
      sparkComponentClassName('Masthead', 'big-nav-item'),
      sparkObjectClassName('Stack', 'item'),
      sparkObjectClassName('Stack', 'item', 'flex@xxs'),
      { [activeClassName]: active }
    )
  };

  get subMenuContainerClassName() {
    return [
      sparkComponentClassName('Dropdown'),
      sparkClassName('utility', 'Width', null, '100'),
      sparkClassName('utility', 'TextAlign', null, 'left'),
      sparkClassName('utility', 'Display', null, 'none')
    ].join(' ')
  }

  /**
   * @returns {boolean}
   */
  get hasLinks() {
    return !!(this.props.links && this.props.links.length)
  }

  render = () => {
    const { active, href, text, links, id } = this.props
    const toggleId = id + '-nav-item-toggle';
    let conditionalLiProps = {}

    if (this.hasLinks) {
      conditionalLiProps = {
        ...conditionalLiProps,
        'aria-haspopup': true,
        'aria-expanded': false
      }
    }

    return (
      <li
        className={this.getClassName(active)}
        ref={this.liRef}
        {...conditionalLiProps}
      >
        <Link
          variant='plain'
          masthead
          className={sparkComponentClassName('Masthead', 'link', 'big-nav')}
          href={href}
          data-sprk-dropdown-trigger={toggleId}
        >
          {text}
          {this.hasLinks && <Icon name='chevron-down' color='base' />}
        </Link>
        {this.hasLinks && (
          <div
            className={this.subMenuContainerClassName}
            data-sprk-dropdown={toggleId}
          >
            <ul className={sparkComponentClassName('Dropdown', 'links')}>
              {links.map((sublink, i) => (
                <li
                  className={sparkComponentClassName('Dropdown', 'item')}
                  role='option'
                  key={i}
                >
                  <a
                    className={sparkComponentClassName('Dropdown', 'link')}
                    href={sublink.href}
                  >
                    {sublink.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    )
  };
}

export default WideNavigationItem
