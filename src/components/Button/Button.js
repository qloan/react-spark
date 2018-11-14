import classNames from 'classnames';
import {
  setSpinning,
  cancelSpinning
} from '@sparkdesignsystem/spark-core/components/spinners';
import PropTypes from 'prop-types';
import React from 'react';

import BUTTON_VARIANTS from './variants';
import { sparkClassName, sparkComponentClassName } from '../../util';

class Button extends React.Component {
  static defaultProps = {
    disabled: false,
    fullWidthAtSmallViewport: false,
    spinner: false,
    variant: 'primary'
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    fullWidthAtSmallViewport: PropTypes.bool,
    spinner: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS))
  };

  ref = React.createRef();

  get className() {
    const { disabled, fullWidthAtSmallViewport, variant } = this.props

    const baseClass = sparkComponentClassName('Button')
    const variantClass = sparkComponentClassName('Button', null, variant)
    const disabledClass = sparkClassName('is', 'Disabled')
    const fullWidthAtSmallViewportClass = sparkComponentClassName(
      'Button',
      null,
      'full',
      'sm'
    )

    return classNames(baseClass, {
      [variantClass]: variant !== BUTTON_VARIANTS.PRIMARY,
      [disabledClass]: disabled,
      [fullWidthAtSmallViewportClass]: fullWidthAtSmallViewport
    })
  }

  componentDidMount = () => {
    if (this.props.spinner) {
      setSpinning(this.ref.current, {})
    }
  };

  componentDidUpdate = () => {
    if (this.props.spinner) {
      setSpinning(this.ref.current, {})
    } else {
      cancelSpinning(this.ref.current, {})
    }
  };

  render = () => {
    const {
      children,
      disabled,
      fullWidthAtSmallViewport,
      spinner,
      variant,
      text,
      ...rest
    } = this.props

    return (
      <button
        className={this.className}
        disabled={disabled}
        ref={this.ref}
        variant={variant}
        {...rest}
      >
        {text}
      </button>
    )
  };
}

export default Button
