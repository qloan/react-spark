import {
  formatMonetary
} from '@sparkdesignsystem/spark-core/base/monetaryInput'
import {
  bindUIEvents as bindTextInputUiEvents
} from '@sparkdesignsystem/spark-core/base/textInput'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  setAndDispatchInput,
  sparkBaseClassName,
  sparkClassName
} from '../../util'

class MonetaryInput extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    onBlur: () => {},
    pattern: '(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$',
    type: 'tel',
    value: null,
    width: 100
  }

  inputRef = React.createRef()

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
    width: PropTypes.number
  }

  get className() {
    const {className, error, width} = this.props
    const errorClassName = error
      ? sparkBaseClassName('TextInput', null, 'error')
      : null
    const widthClassName = width
      ? sparkClassName('utility', `Width-${width}`)
      : null

    return classnames(
      sparkBaseClassName('TextInput'),
      sparkBaseClassName('TextInput', null, 'monetary'),
      {
        [errorClassName]: errorClassName,
        [widthClassName]: widthClassName,
        [className]: className
      }
    )
  }

  componentDidMount = () => {
    const inputElement = this.inputRef.current

    bindTextInputUiEvents(inputElement)

    if (this.props.value != null) {
      this.maskValue()
    }
  }

  handleBlur = () => {
    this.maskValue()
    this.props.onBlur()
  }

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'monetary')
    ].join(' ')
  }

  get maskedValue() {
    const {pattern, value} = this.props
    const inputElement = this.inputRef.current
    const patternRegex = new RegExp(pattern)

    if (value == null) { // This component is uncontrolled
      return patternRegex.test(inputElement.value)
        ? formatMonetary(inputElement.value)
        : inputElement.value
    } else {
      return patternRegex.test(value) ? formatMonetary(value) : value
    }
  }

  get iconContainerClassName() {
    return [
      sparkBaseClassName('TextInputIconContainer'),
      sparkBaseClassName('TextInputIconContainer', null, 'monetary')
    ].join(' ')
  }

  /**
   * Set input value to masked value and fire input event
   */
  maskValue = () => {
    setAndDispatchInput(this.inputRef.current, this.maskedValue)
  }

  renderErrorContent = () => {
    const {error} = this.props

    if (!error) return null

    return (
      <React.Fragment>
        {/* TODO: Render SVG */}
        <div className={sparkBaseClassName('ErrorText')}>{error}</div>
      </React.Fragment>
    )
  }

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
      ...props
    } = this.props
    let valueProp

    if (value == null) {
      valueProp = {}
    } else {
      if (disabled) {
        // Format value because `this.maskValue()` doesn't work if the input is
        // disabled
        valueProp = {value: formatMonetary(value)}
      } else {
        valueProp = {value}
      }
    }

    return (
      <div className={sparkClassName('utility', 'JavaScript')}>
        <div className={sparkBaseClassName('InputContainer')}>
          <div className={this.iconContainerClassName}>
            <input
              aria-describedby={`${id}--error-container`}
              className={this.className}
              disabled={disabled}
              id={id}
              onBlur={this.handleBlur}
              pattern={pattern}
              ref={this.inputRef}
              type={type}
              {...valueProp}
              {...props}
            />
            <div
              className={sparkBaseClassName('InputContainer', 'input-border')}
            />
            <label className={this.labelClassName} htmlFor={id}>{label}</label>
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
  }
}

export default MonetaryInput