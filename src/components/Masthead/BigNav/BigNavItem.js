import classnames from 'classnames'
import PropTypes from 'prop-types'
import { dropdowns } from '@sparkdesignsystem/spark-core/components/dropdown'
import React from 'react'
import Icon from '../../Icon/Icon'
import Link from '../../Link/Link'

import {
  sparkClassName,
  sparkComponentClassName,
  sparkObjectClassName
} from '../../../util'

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

  componentDidMount = () => {
    if (!window.initDropdowns) {
      dropdowns()
      window.initDropdowns = true
    }
  };

  /**
   * @returns {boolean}
   */
  get hasLinks() {
    return !!(this.props.links && this.props.links.length)
  }

  render = () => {
    const { active, href, text, links, id } = this.props
    const toggleId = id + '-nav-item-toggle'
    let conditionalLiProps = {}
    let conditionalDivProps = {}

    if (this.hasLinks) {
      conditionalLiProps = {
        ...conditionalLiProps,
        'aria-haspopup': true,
        role: 'combobox',
        'data-sprk-dropdown-trigger': toggleId
      }
      conditionalDivProps = {
        ...conditionalDivProps,
        'data-sprk-dropdown': toggleId
      }
    }

    return (
      <li className={this.getClassName(active)} ref={this.liRef}>
        <Link
          variant='plain'
          masthead
          className={sparkComponentClassName('Masthead', 'link', 'big-nav')}
          href={href}
          {...conditionalLiProps}
        >
          {text}
          {this.hasLinks && <Icon name='chevron-down' color='base' />}
        </Link>
        {this.hasLinks && (
          <div
            className={this.subMenuContainerClassName}
            {...conditionalDivProps}
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
