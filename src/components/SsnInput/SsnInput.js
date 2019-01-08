import { formatSSN } from '@sparkdesignsystem/spark-core/base/ssnInput';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import {
  setAndDispatchInput,
  sparkBaseClassName,
  sparkClassName
} from '../../util';

export const ssnInputValidationRegex =
  '(^(?!666|000|9\\d{2})\\d{3}([-]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$';
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

    // Add event listener if this component is uncontrolled
    if (this.props.value === '') {
      inputElement.addEventListener('input', this.handleInput)
    } else {
      this.maskValue()
    }
  };

  componentDidUpdate = () => {
    const { value } = this.props

    // Mask value if this component is controlled
    if (value !== '' && value !== this.maskedValue) this.maskValue()
  };

  handleChange = event => {
    event.target.value = event.target.value.replace(/-/g, '')
    this.props.onChange ? this.props.onChange(event) : null
  };

  handleBlur = event => {
    event.target.value = event.target.value.replace(/-/g, '')
    this.props.onBlur ? this.props.onBlur(event) : null
  };

  handleInput = event => {
    const { value } = this.props

    // Mask value if this component is uncontrolled
    if (value == null && event.target.value !== this.maskedValue) {
      this.maskValue()
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

  /**
   * Set input value to masked value and fire input event
   */
  maskValue = () => {
    setAndDispatchInput(this.inputRef.current, this.maskedValue)
  };

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

  renderErrorContent = () => {
    const { error } = this.props

    if (!error) return null

    return (
      <React.Fragment>
        {/* TODO: Render SVG */}
        <div className={sparkBaseClassName('ErrorText')}>{error}</div>
      </React.Fragment>
    )
  };

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
      ...props
    } = this.props
    const { showSsn } = this.state
    const valueProp = value == null ? {} : { value: formatSSN(value) }

    return (
      <div className={sparkClassName('utility', 'JavaScript')}>
        <div
          className={sparkBaseClassName('InputContainer')}
          ref={this.inputRef}
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
          <div
            className={sparkBaseClassName('InputContainer', 'input-border')}
          />
          <label htmlFor={id} className={sparkBaseClassName('Label')}>
            {label}
          </label>
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
          <div
            className={sparkBaseClassName('ErrorContainer')}
            id={`${id}--error-container`}
          >
            {this.renderErrorContent()}
          </div>
        </div>
      </div>
    )
  };
}

export default SsnInput
