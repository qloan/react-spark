import { bindUIEvents as bindDateInputUiEvents } from '@sparkdesignsystem/spark-core/base/dateInput'
import { bindUIEvents as bindTextInputUiEvents } from '@sparkdesignsystem/spark-core/base/textInput'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkBaseClassName,
  sparkWidthClassName
} from '../../util'

class DateInput extends React.Component {
  static defaultProps = {
    disabled: false,
    pattern: '^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$',
    placeholder: 'MM/DD/YYYY',
    width: null
  }

  inputContainerRef = React.createRef()

  inputRef = React.createRef()

  static propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    width: PropTypes.number
  }

  componentDidMount = () => {
    bindDateInputUiEvents(this.inputContainerRef.current)
    bindTextInputUiEvents(this.inputRef.current)
  }

  get className() {
    const {className, width} = this.props
    const widthClassName = width ? sparkWidthClassName(width) : null

    return classnames(
      sparkBaseClassName('TextInput'),
      {[widthClassName]: widthClassName},
      {[className]: className}
    )
  }

  render = () => {
    const {
      className,
      disabled,
      id,
      label,
      pattern,
      placeholder,
      width,
      ...props
    } = this.props

    return (
      <div
        className={sparkBaseClassName('InputContainer')}
        ref={this.inputContainerRef}
      >
        <input
          aria-describedby={`${id}--error-container`}
          className={this.className}
          data-id={id}
          disabled={disabled}
          id={id}
          pattern={pattern}
          placeholder={placeholder}
          ref={this.inputRef}
          type='text'
          {...props}
        />
        <div className={sparkBaseClassName('InputContainer', 'input-border')} />
        <label
          className={sparkBaseClassName('Label')}
          htmlFor={id}
        >
          {label}
        </label>
        <div
          className={sparkBaseClassName('ErrorContainer')}
          id={`${id}-error-container`}
        />
      </div>
    )
  }
}

export default DateInput
