import { bindUIEvents as bindDateInputUiEvents } from '@sparkdesignsystem/spark-core/base/dateInput'
import { bindUIEvents as bindDatePickerUiEvents } from '@sparkdesignsystem/spark-core/base/datePicker'
import { bindUIEvents as bindTextInputUiEvents } from '@sparkdesignsystem/spark-core/base/textInput'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkBaseClassName, sparkClassName, sparkComponentClassName,
  sparkWidthClassName
} from '../../util'

class DatePicker extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    pattern: '^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$',
    placeholder: 'MM/DD/YYYY',
    width: null
  }

  inputContainerRef = React.createRef()

  inputRef = React.createRef()

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    width: PropTypes.number
  }

  componentDidMount = () => {
    bindDateInputUiEvents(this.inputContainerRef.current)
    bindDatePickerUiEvents(this.inputContainerRef.current)
    bindTextInputUiEvents(this.inputRef.current)
  }

  get className() {
    const {className, error, width} = this.props
    const errorClassName = error
      ? sparkBaseClassName('TextInput', null, 'error')
      : null
    const widthClassName = width ? sparkWidthClassName(width) : null

    return classnames(
      sparkBaseClassName('TextInput'),
      sparkBaseClassName('TextInput', null, 'with-icon'),
      sparkClassName('utility', 'pll'),
      sparkWidthClassName(100),
      {
        [errorClassName]: errorClassName,
        [widthClassName]: widthClassName,
        [className]: className
      }
    )
  }

  get calendarSvgClassName() {
    return [
      sparkComponentClassName('Icon'),
      sparkComponentClassName('Icon', null, 'current-color'),
      sparkBaseClassName('DatePicker', 'icon')
    ].join(' ')
  }

  get exclamationSvgClassName() {
    return [
      sparkComponentClassName('Icon'),
      sparkComponentClassName('Icon', null, 'm'),
      sparkBaseClassName('ErrorIcon')
    ].join(' ')
  }

  renderCalendarSvg = () => (
    <svg
      className={this.calendarSvgClassName}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
    >
      <path fill='none' d='M7.1 7.1H57V57H7.1z' />
      <path
        d='M6.4 16.6H58M15.5 25.5h3v3h-3zm10 0h3v3h-3zm10 0h3v3h-3zm10 0h3v3h-3zm-30 10h3v3h-3zm10 0h3v3h-3zm10 0h3v3h-3zm10 0h3v3h-3zm-30 10h3v3h-3zm10 0h3v3h-3zm10 0h3v3h-3zm10 0h3v3h-3z' />
    </svg>
  )

  renderErrorContent = () => {
    const {error} = this.props

    if (!error) return null

    return (
      <React.Fragment>
        {this.renderExclamationSvg()}
        <div className={sparkBaseClassName('ErrorText')}>{error}</div>
      </React.Fragment>
    )
  }

  renderExclamationSvg = () => (
    <svg
      className={this.exclamationSvgClassName}
      height='100%'
      viewBox='0 0 64 64'
      width='100%'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fillRule='evenodd' transform='translate(1 1)'>
        <circle
          className='exclamation-filled-circle'
          cx='27'
          cy='27'
          r='27'
        />
        <g transform='translate(26 13)'>
          <circle
            className='exclamation-filled-i-dot'
            cx='1'
            cy='27.5'
            r='1'
          />
          <path className='exclamation-filled-i-path' d='M0 0h2v22H0z' />
        </g>
      </g>
    </svg>
  )

  render = () => {
    const {
      className,
      disabled,
      error,
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
        <div className={sparkBaseClassName('TextInputIconContainer')}>
          {this.renderCalendarSvg()}
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
            {...props}
          />
          <div
            className={sparkBaseClassName('InputContainer', 'input-border')} />
          <label
            className={sparkBaseClassName('Label')}
            htmlFor={id}
          >
            {label}
          </label>
        </div>
        <div
          className={sparkBaseClassName('ErrorContainer')}
          id={`${id}-error-container`}
        >
          {this.renderErrorContent()}
        </div>
      </div>
    )
  }
}

export default DatePicker
