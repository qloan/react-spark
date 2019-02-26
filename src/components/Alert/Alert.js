import { alerts } from '@sparkdesignsystem/spark-core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ALERT_VARIANTS from './variants'
import { sparkComponentClassName } from '../../util'
import Icon from '../Icon/index'

class Alert extends React.Component {
  static defaultProps = {
    type: ALERT_VARIANTS.INFORMATION,
    dismissible: false
  };

  static propTypes = {
    type: PropTypes.oneOf(
      Object.keys(ALERT_VARIANTS).map(itm => ALERT_VARIANTS[itm])
    ),
    dismissible: PropTypes.bool.isRequired,
    idString: PropTypes.string,
    analyticsString: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  ref = React.createRef();

  get className() {
    const { type, className } = this.props
    const baseClass = sparkComponentClassName('Alert')
    const variantClass = sparkComponentClassName('Alert', null, type)

    return classnames(baseClass, variantClass, { [className]: className })
  }

  componentDidMount = () => {
    const { dismissible } = this.props

    if (dismissible) {
      alerts(this.ref.current, {})
    }
  };

  render = () => {
    const {
      type,
      analyticsString,
      children,
      className,
      dismissible,
      idString,
      variant,
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
      </div>
    )
  };
}

export default Alert
