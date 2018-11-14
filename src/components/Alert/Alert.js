import classNames from 'classnames'
import { alerts } from '@sparkdesignsystem/spark-core/components/alerts'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import ALERT_VARIANTS from './variants'
import { sparkComponentClassName } from '../../util'

class Alert extends Component {
  static defaultProps = {
    variant: ALERT_VARIANTS.INFORMATION,
    dismissible: true
  }

  static propTypes = {
    alertType: PropTypes.string.isRequired,
    dismissible: PropTypes.bool.isRequired,
    idString: PropTypes.string.isRequired,
    analyticsString: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(Object.values(ALERT_VARIANTS))
  }

  ref = React.createRef()

  get className() {
    const { variant } = this.props

    const baseClass = sparkComponentClassName('Alert')
    const variantClass = sparkComponentClassName('Alert', null, variant)

    return classNames(
      baseClass,
      {
        [variantClass]: variant !== ALERT_VARIANTS.INFORMATION
      }
    )
  }

  componentDidMount = () => {
    const {dismissible} = this.props

    if (dismissible) {
      alerts(this.ref.current, {})
    }
  }

  render = () => {
    const { alertType, dismissible, idString, analyticsString, variant, ...rest } = this.props

    if (dismissible) {
      return null
    }

    return <div
      className={this.className}
      {...rest}
    >
    </div>
  }
}

export default Alert
