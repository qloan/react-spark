import { alerts } from '@sparkdesignsystem/spark-core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ALERT_VARIANTS from './variants'
import { sparkComponentClassName } from '../../util'
import Icon from '../Icon/index'
import { getIconNameFromVariant } from './utils'

class Alert extends React.Component {
  static defaultProps = {
    className: null,
    dismissible: false,
    type: ALERT_VARIANTS.INFORMATION
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dismissible: PropTypes.bool,
    type: PropTypes.oneOf(
      Object.keys(ALERT_VARIANTS).map(itm => ALERT_VARIANTS[itm])
    )
  }

  ref = React.createRef()

  get className () {
    const { className, type } = this.props
    const baseClass = sparkComponentClassName('Alert')
    const variantClass = sparkComponentClassName('Alert', null, type)

    return classnames(baseClass, variantClass, { [className]: className })
  }

  get iconClassName () {
    return [
      sparkComponentClassName('Alert', 'icon'),
      sparkComponentClassName('Alert', null, 'stroke-current-color')
    ].join(' ')
  }

  componentDidMount = () => {
    const { dismissible } = this.props

    if (dismissible) {
      alerts(this.ref.current, {})
    }
  }

  render = () => {
    const {
      type,
      children,
      className,
      dismissible,
      ...rest
    } = this.props

    return (
      <div className={this.className} {...rest}>
        <div className={sparkComponentClassName('Alert', 'content')}>
          <Icon
            className={this.iconClassName}
            name={getIconNameFromVariant(type)}
            size={Icon.size.L}
          />
          {children}
        </div>
      </div>
    )
  }
}

export default Alert
