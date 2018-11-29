import {
  bindUIEvents,
  valueTest
} from '@sparkdesignsystem/spark-core/base/textInput'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import InputContainer from './../InputContainer/InputContainer'

import { sparkClassName, sparkWidthClassName } from '../../util'

class TextInput extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    helper: null,
    type: 'text',
    width: 100,
    placeholder: null
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

  get className() {
    const {className, error, width, value, helper} = this.props

    const baseClass = sparkClassName('base', 'TextInput')
    const errorClass = sparkClassName('base', 'TextInput', null, 'error')
    const helperClass = sparkClassName('base', 'TextInput', null, 'helper')
    const widthClass = sparkWidthClassName(width)
    const hasValueClass = value ? sparkClassName('base', 'TextInput', null, 'has-value') : null

    return classNames(baseClass, {
      [errorClass]: error,
      [helperClass]: helper,
      [widthClass]: width,
      [hasValueClass]: hasValueClass,
      [className]: className
    })
  }

  render = () => {
    const {className, disabled, error, helper, id, label, type, placeholder, pattern, ...props} = this.props

    return (
      <InputContainer error={error} helper={helper} id={id} label={label}>
        <input
          className={this.className}
          disabled={disabled}
          id={id}
          data-id={id}
          type={type}
          aria-describedby={`${id}--error-container`}
          ref={this.inputRef}
          {...props}
        />
      </InputContainer>
    )
  }
}

export default TextInput
