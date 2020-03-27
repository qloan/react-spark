import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import InputContainer from './../InputContainer/InputContainer'
import { sparkBaseClassName, sparkWidthClassName } from '../../util'

class TextArea extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    width: 100
  };

  inputRef = React.createRef();

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.number,
    parentContainerClassName: PropTypes.string
  };

  get className() {
    const { className, error, width } = this.props

    const baseClass = sparkBaseClassName('TextArea')
    const errorClass = sparkBaseClassName('TextArea', null, 'error')
    const widthClass = sparkWidthClassName(width)

    return classNames(baseClass, className, {
      [errorClass]: error,
      [widthClass]: width
    })
  }

  render = () => {
    const { className, disabled, error, id, label, parentContainerClassName, ...props } = this.props

    return (
      <InputContainer
        error={error}
        id={id}
        label={label}
        positionLabelUpper={true}
        className={parentContainerClassName}
        inputRef={this.inputRef}
      >
        <textarea
          className={this.className}
          disabled={disabled}
          id={id}
          data-id={id}
          aria-describedby={`${id}--error-container`}
          {...props}
        />
      </InputContainer>
    )
  };
}

export default TextArea
