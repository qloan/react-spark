import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ALERT_VARIANTS from './variants'
import { sparkComponentClassName, sparkClassName } from '../../util'
import Icon from '../Icon/index'

class Alert extends React.Component {
  static defaultProps = {
    type: ALERT_VARIANTS.INFORMATION,
    dismissible: false
  }

  static state = {
    dismissed: false
  }

  static propTypes = {
    type: PropTypes.oneOf(
      Object.keys(ALERT_VARIANTS).map(itm => ALERT_VARIANTS[itm])
    ),
    dismissible: PropTypes.bool.isRequired,
    idString: PropTypes.string,
    analyticsString: PropTypes.string,
    children: PropTypes.node.isRequired,
    handleAlertDismissed: PropTypes.func
  }

  get className() {
    const { type, className } = this.props
    const baseClass = sparkComponentClassName('Alert')
    const variantClass = sparkComponentClassName('Alert', null, type)
    const displayClass = sparkClassName('utility', 'Display', null, 'none')

    return classnames(baseClass, variantClass, { [className]: className, [displayClass]: this.state.dismissed })
  }

  get classNameCloseIcon() {
    const baseClass = sparkComponentClassName('Alert', 'icon')
    const variantClass = sparkComponentClassName('Alert', 'icon', 'dismiss')

    classnames(baseClass, variantClass)
  }

  dismissAlert = () => {
    this.setState({dismissed: true}, () => {
      this.props.handleAlertDismissed && this.props.handleAlertDismissed(true)
    })
  }

  render = () => {
    const {
      type,
      analyticsString,
      children,
      className,
      dismissible,
      idString,
      variant,
      handleAlertDismissed,
      ...rest
    } = this.props

    return (
      <div className={this.className} {...rest}>
        <div className={sparkComponentClassName('Alert', 'content')}>
          {type === ALERT_VARIANTS.INFORMATION && (
            <Icon name='bell' size={Icon.size.L} />
          )}
          {type === ALERT_VARIANTS.SUCCESS && (
            <Icon name='check-mark' size={Icon.size.L} />
          )}
          {type === ALERT_VARIANTS.FAIL && (
            <Icon name='exclamation' size={Icon.size.L} />
          )}
          {children}
        </div>
        {
          dismissible &&
          <button className={this.classNameCloseIcon} type="button" title="Dismiss" onClick={this.dismissAlert}>
            <Icon name="close" size={Icon.size.M}/>
          </button>
        }
      </div>
    )
  }
}

export default Alert
