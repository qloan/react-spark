import { bindUIEvents as bindTextInputUiEvents } from '@sparkdesignsystem/spark-core/base/requiredTextInput';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { sparkBaseClassName, sparkClassName } from '../../util';

class PasswordInput extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    label: 'Password',
    onBlur: () => console.log('onBlur not implemented'),
    onChange: () => console.log('onChange not implemented'),
    pattern: /./,
    showSsnLabel: 'Show Password',
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
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
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

    bindTextInputUiEvents(inputElement)
  };

  handleShowPasswordChange = event =>
    this.setState({ showPassword: event.target.checked });

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
    const { showPassword } = this.state
    const valueProp = value == '' ? {} : { value }

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
            type={showPassword ? 'text' : 'password'}
            {...valueProp}
            {...props}
          />
          <div
            className={sparkBaseClassName('InputContainer', 'input-border')}
          />
          <label htmlFor={id} className={sparkBaseClassName('Label')}>
            {label}
          </label>
          <div className={this.selectionContainerClassName}>
            <input
              checked={showPassword}
              disabled={disabled}
              id={`${id}-show-password`}
              onChange={this.handleShowPasswordChange}
              type='checkbox'
            />
            <label
              className={this.showLabelClassName}
              htmlFor={`${id}-show-password`}
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

export default PasswordInput
