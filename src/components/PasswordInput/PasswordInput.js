import passwordInput from '@sparkdesignsystem/spark-core/base/passwordInput'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import InputContainer from './../InputContainer/InputContainer'
import { sparkBaseClassName, sparkClassName } from '../../util'

class PasswordInput extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    label: 'Password',
    onBlur: () => console.log('onBlur not implemented'),
    onChange: () => console.log('onChange not implemented'),
    pattern: '/./',
    showPasswordLabel: 'Show Password',
    value: '',
    width: 100
  };

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    pattern: PropTypes.regexp,
    placeholder: PropTypes.string,
    helper: PropTypes.string,
    showPasswordLabel: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.number
  };

  state = {
    showPassword: false
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
    passwordInput()
  };

  handleShowPasswordChange = event =>
    this.setState({ showPassword: event.target.checked });

  get selectionContainerClassName() {
    return [
      sparkBaseClassName('SelectionContainer'),
      sparkBaseClassName('InputContainer', 'visibility-toggle')
    ].join(' ')
  }

  get showLabelClassName() {
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
      showPasswordLabel,
      value,
      width,
      helper,
      ...props
    } = this.props
    const { showPassword } = this.state
    const valueProp = value == '' ? {} : { value }

    return (
      <InputContainer
        error={error}
        helper={helper}
        id={id}
        label={label}
        inputRef={this.inputRef}
        data-sprk-input='password'
      >
        <input
          aria-describedby={`${id}--error-container`}
          className={this.className}
          disabled={disabled}
          id={id}
          pattern={pattern}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          {...valueProp}
          {...props}
        />
        <div className={this.selectionContainerClassName}>
          <input
            disabled={disabled}
            id={`${id}-show-password`}
            onChange={this.handleShowPasswordChange}
            type='checkbox'
          />
          <label
            className={this.showLabelClassName}
            htmlFor={`${id}-show-password`}
          >
            {showPasswordLabel}
          </label>
        </div>
      </InputContainer>
    )
  };
}

export default PasswordInput
