import {
  bindUIEvents,
  valueTest
} from '@sparkdesignsystem/spark-core/base/textInput'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import InputContainer from './../InputContainer/InputContainer'

import { sparkClassName, sparkWidthClassName } from '../../util'
import TEXTINPUT_VARIANTS from './variants'

class TextInput extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    helper: null,
    type: 'text',
    width: 100,
    variant: null,
    pattern: null,
    placeholder: null,
    icon: null
  }

  inputRef = React.createRef()

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    helper: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.number,
    value: PropTypes.any,
    variant: PropTypes.string,
    placeholder: PropTypes.string
  }

  componentDidMount = () => {
    valueTest(this.inputRef.current)
    bindUIEvents(this.inputRef.current)
  }

  get variant() {
    const { variant } = this.props
    if (!variant) return TEXTINPUT_VARIANTS.default
    return TEXTINPUT_VARIANTS[variant.toLowerCase()]
  }

  get className() {
    const {error, width, value, helper, variant} = this.props

    const baseClass = sparkClassName('base', 'TextInput')
    const errorClass = sparkClassName('base', 'TextInput', null, 'error')
    const helperClass = sparkClassName('base', 'TextInput', null, 'helper')
    const variantClass = sparkClassName('base', 'TextInput', null, variant)
    const widthClass = sparkWidthClassName(width)
    const hasValueClass = value ? sparkClassName('base', 'TextInput', null, 'has-value') : null

    return classNames(baseClass, {
      [errorClass]: error,
      [helperClass]: helper,
      [widthClass]: width,
      [variantClass]: variant,
      [hasValueClass]: hasValueClass
    })
  }

  render = () => {
    const {disabled, error, helper, id, label, type, variant, placeholder, pattern, ...rest} = this.props

    return (
      <InputContainer error={error} helper={helper} id={id} label={label} variant={variant}>
        <input
          className={this.className}
          disabled={disabled}
          id={id}
          data-id={id}
          type={type}
          aria-describedby={`${id}--error-container`}
          ref={this.inputRef}
          placeholder={placeholder || this.variant.placeholder}
          pattern={pattern || this.variant.pattern}
          data-sprk-input={'text'}
          {...rest}
        />
      </InputContainer>
    )
  }
}

export default TextInput
