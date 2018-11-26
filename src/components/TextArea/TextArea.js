import { bindUIEvents } from '@sparkdesignsystem/spark-core/base/textInput'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import InputContainer from './../InputContainer/InputContainer'

import { sparkClassName, sparkWidthClassName } from '../../util'

class TextArea extends React.Component {
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

  get className() {
    const { error, width } = this.props

    const baseClass = sparkClassName('base', 'TextInput')
    const errorClass = sparkClassName('base', 'TextInput', null, 'error')
    const widthClass = sparkWidthClassName(width)

    return classNames(baseClass, {
      [errorClass]: error,
      [widthClass]: width
    })
  }

  render = () => {
    const { disabled, error, id, label, ...rest } = this.props

    return (
      <InputContainer
        error={error}
        id={id}
        label={label}
        positionLabelUpper={true}
      >
        <textarea
          className={this.className}
          disabled={disabled}
          id={id}
          data-id={id}
          aria-describedby={`${id}--error-container`}
          ref={this.inputRef}
          {...rest}
        />
      </InputContainer>
    )
  }
}

export default TextArea