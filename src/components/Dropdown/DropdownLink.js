import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import { bindDropdownUIEvents } from '@sparkdesignsystem/spark-core'
import { sparkBaseClassName } from '../../util'

class DropdownLink extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string
  };

  ref = React.createRef();

  get linkClassName() {
    const { className } = this.props
    return classNames(
      sparkBaseClassName('Link'),
      sparkBaseClassName('Link', null, 'plain'),
      {
        [className]: className
      }
    )
  }

  componentDidMount() {
    try {
      bindDropdownUIEvents(this.ref.current)
    } catch (e) {
      console.log('Failed to bind events')
    }
  }

  render = () => {
    const { text, icon, id, href } = this.props

    return (
      <a
        aria-haspopup={true}
        role='combobox'
        data-sprk-dropdown-trigger={id}
        className={this.linkClassName}
        href={href}
        ref={this.ref}
        style={{ textDecoration: 'none' }}
      >
        {icon ? (
          <Icon name={icon} size={Icon.size.L} color='base' />
        ) : (
          <Fragment>
            <span data-sprk-dropdown-trigger-text-container role='combobox'>
              {text}
            </span>
            <Icon name='chevron-down' color='base' />
          </Fragment>
        )}
      </a>
    )
  };
}

export default DropdownLink
