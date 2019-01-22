import {
  setSpinning,
  cancelSpinning
} from '@sparkdesignsystem/spark-core'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import BUTTON_VARIANTS from './variants'
import { sparkClassName, sparkComponentClassName } from '../../util'

class Button extends React.Component {
  static defaultProps = {
    disabled: false,
    fullWidthAtSmallViewport: false,
    href: null,
    spinner: false,
    variant: 'primary'
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    fullWidthAtSmallViewport: PropTypes.bool,
    href: PropTypes.string,
    spinner: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS))
  }

  ref = React.createRef()

  get className() {
    const {className, disabled, fullWidthAtSmallViewport, variant} = this.props

    const baseClass = sparkComponentClassName('Button')
    const variantClass = sparkComponentClassName('Button', null, variant)
    const disabledClass = sparkClassName('is', 'Disabled')
    const fullWidthAtSmallViewportClass =
      sparkComponentClassName('Button', null, 'full', 'xs')

    return classNames(baseClass, {
      [variantClass]: variant !== BUTTON_VARIANTS.PRIMARY,
      [disabledClass]: disabled,
      [fullWidthAtSmallViewportClass]: fullWidthAtSmallViewport,
      [className]: className
    })
  }

  componentDidMount = () => {
    if (this.props.spinner) {
      setSpinning(this.ref.current, {})
    }
  }

  componentDidUpdate = prevProps => {
    const {props, ref} = this

    if (prevProps.spinner !== props.spinner) {
      if (props.spinner) {
        setSpinning(ref.current, {})
      } else {
        cancelSpinning(ref.current, {})
      }
    }
  }

  render = () => {
    const {
      children,
      className,
      disabled,
      fullWidthAtSmallViewport,
      href,
      spinner,
      variant,
      ...rest
    } = this.props

    let Element

    let props = {
      className: this.className,
      disabled: disabled,
      ref: this.ref,
      ...rest
    }

    if (href) {
      Element = 'a'
      props.href = href
    } else {
      Element = 'button'
    }

    return <Element {...props}>{children}</Element>
  }
}

export default Button
