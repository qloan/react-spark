import { formatDate } from '@sparkdesignsystem/spark-core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  setAndDispatchInput,
  sparkBaseClassName,
  sparkClassName,
  sparkComponentClassName,
  sparkWidthClassName
} from '../../util'

class DateInput extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    mask: formatDate,
    pattern:
      '^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$',
    placeholder: 'MM/DD/YYYY',
    value: null,
    width: null
  };

  inputContainerRef = React.createRef();

  inputRef = React.createRef();

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mask: PropTypes.func,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.number
  };

  get className() {
    const { className, error, width } = this.props
    const errorClassName = error
      ? sparkBaseClassName('TextInput', null, 'error')
      : null
    const widthClassName = width ? sparkWidthClassName(width) : null

    return classnames(sparkBaseClassName('TextInput'), {
      [errorClassName]: errorClassName,
      [widthClassName]: widthClassName,
      [className]: className
    })
  }

  componentDidMount = () => {
    const inputElement = this.inputRef.current
    // Add event listener if this component is uncontrolled
    if (this.props.value == null) {
      inputElement.addEventListener('input', this.handleInput)
    }
  };

  componentDidUpdate = () => {
    const { value } = this.props

    // Mask value if this component is controlled
    if (value != null && value !== this.maskedValue) this.maskValue()
  };

  componentWillUnmount() {
    // Add event listener if this component is uncontrolled
    if (this.props.value == null) {
      this.inputRef.current.removeEventListener('input', this.handleInput)
    }
  }

  get exclamationSvgClassName() {
    return [
      sparkComponentClassName('Icon'),
      sparkComponentClassName('Icon', null, 'm'),
      sparkBaseClassName('ErrorIcon')
    ].join(' ')
  }

  handleInput = event => {
    const { value } = this.props

    // Mask value if this component is uncontrolled
    if (value == null && event.target.value !== this.maskedValue) {
      this.maskValue()
    }
  };

  get maskedValue() {
    const { mask, pattern, value } = this.props
    const inputElement = this.inputRef.current
    const patternRegex = new RegExp(pattern)

    if (value == null) {
      // This component is uncontrolled
      return patternRegex.test(inputElement.value)
        ? mask(inputElement.value)
        : inputElement.value
    } else {
      // This component is controlled
      return patternRegex.test(value) ? mask(value) : value
    }
  }

  /**
   * Set input value to masked value and fire input event
   */
  maskValue = () => {
    setAndDispatchInput(this.inputRef.current, this.maskedValue)
  };

  renderErrorContent = () => {
    const { error } = this.props

    if (!error) return null

    return (
      <React.Fragment>
        {this.renderExclamationSvg()}
        <div className={sparkBaseClassName('ErrorText')}>{error}</div>
      </React.Fragment>
    )
  };

  renderExclamationSvg = () => (
    <svg
      className={this.exclamationSvgClassName}
      height='100%'
      viewBox='0 0 64 64'
      width='100%'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fillRule='evenodd' transform='translate(1 1)'>
        <circle className='exclamation-filled-circle' cx='27' cy='27' r='27' />
        <g transform='translate(26 13)'>
          <circle className='exclamation-filled-i-dot' cx='1' cy='27.5' r='1' />
          <path className='exclamation-filled-i-path' d='M0 0h2v22H0z' />
        </g>
      </g>
    </svg>
  );

  render = () => {
    const {
      className,
      disabled,
      error,
      id,
      label,
      mask,
      pattern,
      placeholder,
      value,
      width,
      ...props
    } = this.props
    const valueProp = value == null ? {} : { value }

    return (
      <div className={sparkClassName('utility', 'JavaScript')}>
        <div
          className={sparkBaseClassName('InputContainer')}
          ref={this.inputContainerRef}
        >
          <input
            aria-describedby={`${id}--error-container`}
            aria-invalid={!!error}
            className={this.className}
            data-id={id}
            disabled={disabled}
            id={id}
            pattern={pattern}
            placeholder={placeholder}
            ref={this.inputRef}
            type='text'
            {...valueProp}
            {...props}
          />
          <div
            className={sparkBaseClassName('InputContainer', 'input-border')}
          />
          <label className={sparkBaseClassName('Label')} htmlFor={id}>
            {label}
          </label>
          <div
            className={sparkBaseClassName('ErrorContainer')}
            id={`${id}-error-container`}
          >
            {this.renderErrorContent()}
          </div>
        </div>
      </div>
    )
  };
}

export default DateInput
