import {
  bindUIEvents,
  valueTest
} from '@sparkdesignsystem/spark-core/base/textInput'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import InputContainer from './../InputContainer/InputContainer'

import { sparkBaseClassName, sparkWidthClassName } from '../../util'

class TextInput extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    type: 'text',
    width: 100
  }

  inputRef = React.createRef()

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.number
  }

  componentDidMount = () => {
    valueTest(this.inputRef.current)
    bindUIEvents(this.inputRef.current)
  }

  get className() {
    const { className, error, width } = this.props

    const errorClass = sparkBaseClassName('TextInput', null, 'error')
    const widthClass = sparkWidthClassName(width)

    return classNames(sparkBaseClassName('TextInput'), {
      [errorClass]: error,
      [widthClass]: width,
      [className]: className
    })
  }

  render = () => {
    const { className, disabled, error, id, label, type, ...props } = this.props

    return (
      <InputContainer error={error} id={id} label={label}>
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
