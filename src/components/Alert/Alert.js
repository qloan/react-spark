import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ALERT_VARIANTS from './variants'
import { sparkClassName, sparkComponentClassName } from '../../util'
import Icon from '../Icon/index'
import { getIconNameFromVariant } from './utils'

class Alert extends React.Component {
  static defaultProps = {
    className: null,
    dismissible: false,
    handleAlertDismissed: () => {},
    type: ALERT_VARIANTS.INFORMATION
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dismissible: PropTypes.bool,
    handleAlertDismissed: PropTypes.func,
    type: PropTypes.oneOf(
      Object.keys(ALERT_VARIANTS).map(itm => ALERT_VARIANTS[itm])
    )
  }

  state = {
    dismissed: false
  }

  get className () {
    const { className, type } = this.props
    const baseClass = sparkComponentClassName('Alert')
    const variantClass = sparkComponentClassName('Alert', null, type)
    const displayClass = sparkClassName('utility', 'Display', null, 'none')

    return classnames(baseClass, variantClass, {
      [className]: className,
      [displayClass]: this.state.dismissed
    })
  }

  get closeButtonClassName () {
    return [
      sparkComponentClassName('Alert', 'icon'),
      sparkComponentClassName('Alert', 'icon', 'dismiss')
    ].join(' ')
  }

  get iconClassName () {
    return [
      sparkComponentClassName('Alert', 'icon'),
      sparkComponentClassName('Icon', null, 'stroke-current-color')
    ].join(' ')
  }

  dismissAlert = () => {
    this.setState({ dismissed: true }, () => {
      this.props.handleAlertDismissed(true)
    })
  }

  render = () => {
    const {
      children,
      className,
      dismissible,
      handleAlertDismissed,
      type,
      ...rest
    } = this.props

    return (
      <div className={this.className} role='alert' {...rest}>
        <div className={sparkComponentClassName('Alert', 'content')}>
          <Icon
            className={this.iconClassName}
            name={getIconNameFromVariant(type)}
            size={Icon.size.L}
          />
          <div className={sparkComponentClassName('Alert', 'text')}>
            {children}
          </div>
        </div>
        {
          dismissible &&
          <button
            className={this.closeButtonClassName}
            onClick={this.dismissAlert}
            title='Dismiss'
            type='button'
          >
            <Icon
              className={sparkComponentClassName('Icon', null, 'stroke-current-color')}
              name='close'
            />
          </button>
        }
      </div>
    )
  }
}

export default Alert
