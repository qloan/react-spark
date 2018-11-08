import PropTypes from 'prop-types'
import React from 'react'
import { setSpinning } from '@sparkdesignsystem/spark-core/components/spinners'

import BUTTON_TYPES from './types'
import { sparkClassName } from '../../util'

class Button extends React.Component {
  static defaultProps = {
    disabled: false,
    fullWidthAtSmallViewport: false,
    spinner: false,
    type: 'primary'
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    fullWidthAtSmallViewport: PropTypes.bool,
    spinner: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(BUTTON_TYPES))
  }

  ref = React.createRef()

  get className() {
    const {disabled, fullWidthAtSmallViewport, type} = this.props

    const classes = [sparkClassName('component', 'Button')]

    if (type !== BUTTON_TYPES.PRIMARY) {
      classes.push(sparkClassName('component', 'Button', null, type))
    }
    if (disabled) {
      classes.push(sparkClassName('is', 'Disabled'))
    }
    if (fullWidthAtSmallViewport) {
      classes.push(sparkClassName('component', 'Button', null, 'full', 'sm'))
    }

    return classes.join(' ')
  }

  componentDidMount = () => {
    const {spinner} = this.props

    if (spinner) {
      setSpinning(this.ref.current, {})
    }
  }

  render = () => {
    const {
      children,
      disabled,
      fullWidthAtSmallViewport,
      spinner,
      type,
      ...rest
    } = this.props

    return (
      <button
        className={this.className}
        disabled={disabled}
        ref={this.ref}
        {...rest}
      >
        {children}
      </button>
    )
  }
}

export default Button
