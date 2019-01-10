import {
  bindUIEvents,
  formatMonetary
} from '@sparkdesignsystem/spark-core/base/monetaryInput';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import InputContainer from './../InputContainer/InputContainer';
import { sparkBaseClassName, sparkClassName } from '../../util';

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
    width: PropTypes.number
  };

  get className() {
    const { className, error, width } = this.props
    const errorClassName = error
      ? sparkBaseClassName('TextInput', null, 'error')
      : null
    const widthClassName = width
      ? sparkClassName('utility', `Width-${width}`)
      : null

    return classnames(
      sparkBaseClassName('TextInput'),
      sparkBaseClassName('TextInput', null, 'has-text-icon'),
      {
        [errorClassName]: errorClassName,
        [widthClassName]: widthClassName,
        [className]: className
      }
    )
  }

  componentDidMount = () => {
    const inputElement = this.inputRef.current
    bindUIEvents(inputElement)
  };

  unmaskValue = value => {
    return value.match(/[\d.]/g).join('')
  };

  handleBlur = e => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e)
    }
  };

  handleChange = e => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e)
    }
  };

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'monetary')
    ].join(' ')
  }

  get maskedValue() {
    const { pattern, value } = this.props
    const inputElement = this.inputRef.current
    const patternRegex = new RegExp(pattern)

    if (value === '') {
      // This component is uncontrolled
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
      sparkBaseClassName('TextInputIconContainer', null, 'has-text-icon')
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
      onBlur,
      onChange,
      pattern,
      type,
      value,
      width,
      helper,
      ...props
    } = this.props
    let valueProp

    if (value == null) {
      valueProp = {}
    } else {
      if (disabled) {
        valueProp = { value: formatMonetary(value) }
      } else {
        valueProp = { value }
      }
    }

    return (
      <InputContainer
        error={error}
        helper={helper}
        id={id}
        inputRef={this.inputRef}
        data-sprk-input='monetary'
      >
        <div className={this.iconContainerClassName} ref={this.inputRef}>
          {label && (
            <label className={this.labelClassName} htmlFor={id}>
              {label}
            </label>
          )}
          <input
            aria-describedby={`${id}--error-container`}
            className={this.className}
            disabled={disabled}
            id={id}
            pattern={pattern}
            type={type}
            {...valueProp}
            {...props}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <div
            className={sparkBaseClassName('InputContainer', 'input-border')}
          />
        </div>
      </InputContainer>
    )
  };
}

export default MonetaryInput
