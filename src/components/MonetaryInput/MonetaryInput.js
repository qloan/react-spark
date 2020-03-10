import {
  bindMonetaryUIEvents,
  formatMonetary
} from '@sparkdesignsystem/spark-core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import InputContainer from './../InputContainer/InputContainer'
import { sparkBaseClassName, sparkClassName } from '../../util'

export const pattern = /(^\$?(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$)|^$/
class MonetaryInput extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    onBlur: () => {},
    onChange: () => {},
    pattern: '(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$',
    parentContainerClassName: null,
    type: 'tel',
    value: '',
    width: 100,
    noCents: false
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
    helper: PropTypes.node,
    width: PropTypes.number,
    noCents: PropTypes.bool,
    parentContainerClassName: PropTypes.string
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
    bindMonetaryUIEvents(this.inputRef.current)
    const { value } = this.props
    if (value && value.length > 0) {
      const event = {
        target: {
          value: formatMonetary(value)
        }
      }
      this.props.onChange(event)
    }
  };

  handleBlur = e => {
    this.props.onBlur(e)
  };

  handleChange = e => {
    this.props.onChange(e)
  };

  unmaskValue = value => {
    return Number(value.replace(/[^0-9.-]+/g, ''))
  };

  onFocus = e => {
    if (e.target.value) {
      e.target.value = this.unmaskValue(e.target.value)
      this.handleChange(e)
    }
  };

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'monetary')
    ].join(' ')
  }

  get iconContainerClassName() {
    return [
      sparkBaseClassName('TextInputIconContainer'),
      sparkBaseClassName('TextInputIconContainer', null, 'has-text-icon')
    ].join(' ')
  }

  valueProp() {
    const { value, disabled, noCents } = this.props
    let valueProp
    if (value == null) {
      valueProp = {}
    } else {
      if (disabled) {
        valueProp = { value: formatMonetary(value) }
      } else {
        const filteredValue = value.replace(/[^0-9.]/g, '')
        valueProp = {
          value: filteredValue
            ? noCents
              ? String(parseInt(filteredValue))
              : filteredValue
            : ''
        }
      }
    }
    return valueProp
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
      helper,
      noCents,
      parentContainerClassName,
      ...props
    } = this.props

    return (
      <InputContainer
        error={error}
        helper={helper}
        id={id}
        inputRef={this.inputRef}
        className={parentContainerClassName}
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
            {...this.valueProp()}
            {...props}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.onFocus}
          />
        </div>
      </InputContainer>
    )
  };
}

MonetaryInput.pattern = pattern

export default MonetaryInput
