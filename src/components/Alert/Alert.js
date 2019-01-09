import { alerts } from '@sparkdesignsystem/spark-core/components/alerts'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ALERT_VARIANTS from './variants'
import { sparkComponentClassName } from '../../util'

class Alert extends React.Component {
  static defaultProps = {
    alertType: ALERT_VARIANTS.INFORMATION,
    dismissible: false
  }

  static propTypes = {
    alertType: PropTypes.oneOf(Object.values(ALERT_VARIANTS)),
    dismissible: PropTypes.bool.isRequired,
    idString: PropTypes.string.isRequired,
    analyticsString: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  ref = React.createRef()

  get className() {
    const {alertType, className} = this.props
    const baseClass = sparkComponentClassName('Alert')
    const variantClass = sparkComponentClassName('Alert', null, alertType)

    return classnames(
      baseClass,
      variantClass,
      {[className]: className}
    )
  }

  componentDidMount = () => {
    const {dismissible} = this.props

    if (dismissible) {
      alerts(this.ref.current, {})
    }
  }

  render = () => {
    const {
      alertType,
      analyticsString,
      children,
      className,
      dismissible,
      idString,
      variant,
      ...rest
    } = this.props

    return <div className={this.className} {...rest}>{children}</div>
  }
}

export default Alert
