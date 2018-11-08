import { bindUIEvents } from '@sparkdesignsystem/spark-core/base/textInput'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkClassName,
  sparkWidthClassName
} from '../../util'

class TextInput extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    width: 100
  }

  inputRef = React.createRef()

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.number
  }

  componentDidMount = () => {
    bindUIEvents(this.inputRef.current)
  }

  get textInputClassName() {
    const {error, width} = this.props

    const baseClass = sparkClassName('base', 'TextInput')
    const errorClass = sparkClassName('base', 'TextInput', null, 'error')
    const widthClass = sparkWidthClassName(width)

    return classNames(
      baseClass,
      {
        [errorClass]: error,
        [widthClass]: width
      }
    )
  }

  renderErrorContent = () => {
    const {error} = this.props

    if (!error) return null

    return (
      // TODO: Icon SVG
      <div className={sparkClassName('base', 'ErrorText')}>
        {error}
      </div>
    )
  }

  render = () => {
    const {disabled, id, label} = this.props

    return (
      <div className={sparkClassName('utility', 'JavaScript')}>
        <input
          className={this.textInputClassName}
          disabled={disabled}
          id={id}
          type='text'
          aria-describedby={`${id}--error-container`}
          ref={this.inputRef}
        />
        <div
          className={sparkClassName('base', 'InputContainer', 'input-border')}
        />
        <label
          htmlFor={id}
          className={sparkClassName('base', 'Label')}
        >
          {label}
        </label>
        <div
          className={sparkClassName('base', 'ErrorContainer')}
          id={`${id}--error-container`}
        >
          {this.renderErrorContent()}
        </div>
      </div>
    )
  }
}

export default TextInput
