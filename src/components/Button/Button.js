import PropTypes from 'prop-types'
import React from 'react'
import { setSpinning } from '@sparkdesignsystem/spark-core/components/spinners'

import BUTTON_VARIANTS from './variants'
import { sparkClassName } from '../../util'

class Button extends React.Component {
  static defaultProps = {
    disabled: false,
    fullWidthAtSmallViewport: false,
    spinner: false,
    variant: 'primary'
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    fullWidthAtSmallViewport: PropTypes.bool,
    spinner: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS))
  }

  ref = React.createRef()

  get className() {
    const {disabled, fullWidthAtSmallViewport, variant} = this.props

    const classes = [sparkClassName('component', 'Button')]

    if (variant !== BUTTON_VARIANTS.PRIMARY) {
      classes.push(sparkClassName('component', 'Button', null, variant))
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
      variant,
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
