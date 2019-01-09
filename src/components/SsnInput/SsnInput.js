import {
  formatSSN,
  bindUIEvents
} from '@sparkdesignsystem/spark-core/base/ssnInput'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import InputContainer from './../InputContainer/InputContainer'
import { sparkBaseClassName, sparkClassName } from '../../util'

export const ssnInputValidationRegex =
  '(^(?!666|000|9\\d{2})\\d{3}([-]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$'
class SsnInput extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    label: 'Social Security #',
    pattern: ssnInputValidationRegex,
    placeholder: '000-00-0000',
    showSsnLabel: 'Show SSN',
    value: '',
    width: 100
  };

  inputRef = React.createRef();

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    showSsnLabel: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.number
  };

  state = {
    showSsn: false
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
    const inputElement = this.inputRef.current
    bindUIEvents(inputElement)
  };

  handleChange = event => {
    event.target.value = event.target.value.replace(/-/g, '')
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  };

  handleBlur = event => {
    event.target.value = event.target.value.replace(/-/g, '')
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event)
    }
  };

  handleShowSsnChange = event =>
    this.setState({ showSsn: event.target.checked });

  get maskedValue() {
    const { pattern, value } = this.props
    const inputElement = this.inputRef.current
    const patternRegex = new RegExp(pattern)

    if (value == null) {
      // This component is uncontrolled
      return patternRegex.test(inputElement.value)
        ? formatSSN(inputElement.value)
        : inputElement.value
    } else {
      return patternRegex.test(value) ? formatSSN(value) : value
    }
  }

  get selectionContainerClassName() {
    return [
      sparkBaseClassName('SelectionContainer'),
      sparkBaseClassName('InputContainer', 'visibility-toggle')
    ].join(' ')
  }

  get showSsnLabelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'inline')
    ].join(' ')
  }

  render = () => {
    const {
      className,
      disabled,
      error,
      id,
      label,
      pattern,
      placeholder,
      showSsnLabel,
      value,
      width,
      helper,
      ...props
    } = this.props
    const { showSsn } = this.state
    const valueProp = value == null ? {} : { value: formatSSN(value) }

    return (
      <InputContainer
        error={error}
        helper={helper}
        id={id}
        label={label}
        inputRef={this.inputRef}
      >
        <input
          aria-describedby={`${id}--error-container`}
          className={this.className}
          disabled={disabled}
          id={id}
          pattern={pattern}
          placeholder={placeholder}
          type={showSsn ? 'text' : 'password'}
          {...valueProp}
          {...props}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <div className={sparkBaseClassName('InputContainer', 'input-border')} />
        <div className={this.selectionContainerClassName}>
          <input
            checked={showSsn}
            disabled={disabled}
            id={`${id}-show-ssn`}
            onChange={this.handleShowSsnChange}
            type='checkbox'
          />
          <label
            className={this.showSsnLabelClassName}
            htmlFor={`${id}-show-ssn`}
          >
            {showSsnLabel}
          </label>
        </div>
      </InputContainer>
    )
  };
}

export default SsnInput
