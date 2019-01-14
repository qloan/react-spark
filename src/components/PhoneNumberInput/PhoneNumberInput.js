import {
  bindUIEvents,
  formatPhone
} from '@sparkdesignsystem/spark-core/base/phoneInput'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import InputContainer from '../InputContainer/InputContainer'
import { sparkBaseClassName, sparkClassName } from '../../util'

class PhoneNumberInput extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    onBlur: () => {},
    onChange: () => {},
    pattern: '(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$',
    type: 'tel',
    value: '',
    width: 100,
    placeholder: '(000) 000-0000'
  };

  inputRef = React.createRef();

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    pattern: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.number,
    helper: PropTypes.string,
    placeholder: PropTypes.string
  };

  get className() {
    const { className, error, width } = this.props
    const errorClassName = error
      ? sparkBaseClassName('TextInput', null, 'error')
      : null
    const widthClassName = width
      ? sparkClassName('utility', `Width-${width}`)
      : null

    return classnames(sparkBaseClassName('TextInput'), {
      [errorClassName]: errorClassName,
      [widthClassName]: widthClassName,
      [className]: className
    })
  }

  componentDidMount = () => {
    bindUIEvents(this.inputRef.current)
    const { value } = this.props
    if (value && value.length === 10) {
      const event = {
        target: {
          value: formatPhone(value)
        }
      }
      this.props.onChange(event)
    }
  };

  unmaskValue = value => {
    return value.replace(/\D+/g, '')
  };

  handleBlur = e => {
    this.props.onBlur(e)
  };

  handleChange = e => {
    this.props.onChange(e)
  };

  valueProp() {
    const { value, disabled } = this.props
    let valueProp
    if (value == null) {
      valueProp = {}
    } else {
      if (disabled) {
        valueProp = { value: formatPhone(value) || '' }
      } else {
        valueProp = { value }
      }
    }
    return valueProp
  }

  onFocus = e => {
    if (e.target.value) {
      e.target.value = this.unmaskValue(e.target.value)
      this.handleChange(e)
    }
  };

  render = () => {
    const {
      className,
      disabled,
      error,
      id,
      label,
      onBlur,
      pattern,
      type,
      value,
      width,
      helper,
      placeholder,
      ...props
    } = this.props

    return (
      <InputContainer
        error={error}
        helper={helper}
        label={label}
        id={id}
        inputRef={this.inputRef}
        data-sprk-input='phone'
      >
        <input
          aria-describedby={`${id}--error-container`}
          className={this.className}
          disabled={disabled}
          id={id}
          pattern={pattern}
          type={type}
          placeholder={placeholder}
          {...this.valueProp()}
          {...props}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.onFocus}
        />
      </InputContainer>
    )
  };
}

export default PhoneNumberInput
