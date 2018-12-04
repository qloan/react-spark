import { bindUIEvents } from '@sparkdesignsystem/spark-core/base/selectInput'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName, sparkWidthClassName } from '../../util'
import InputContainer from './../InputContainer/InputContainer'
import Icon from './../Icon'

class Select extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    value: null,
    width: 100
  }

  selectRef = React.createRef()

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      disabled: PropTypes.bool,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.string,
    width: PropTypes.number
  }

  componentDidMount = () => {
    bindUIEvents(this.selectRef.current)
  }

  get className() {
    const {className, error, width} = this.props

    const baseClass = sparkClassName('base', 'Select')
    const errorClass = sparkClassName('base', 'TextInput', null, 'error')
    const widthClass = sparkWidthClassName(width)

    return classNames(
      baseClass,
      {
        [errorClass]: error,
        [widthClass]: width,
        [className]: className
      }
    )
  }

  render = () => {
    const {
      className,
      disabled,
      error,
      id,
      label,
      name,
      options,
      value,
      ...props
    } = this.props

    return (
      <InputContainer error={error} id={id} label={label}>
        <select
          aria-describedby={`${id}--error-container`}
          className={this.className}
          data-id={id}
          data-sprk-input='select'
          disabled={disabled}
          id={id}
          name={name}
          ref={this.selectRef}
          value={value}
          {...props}
        >
          {options.map(({disabled = false, value, text}, index) => (
            <option
              disabled={disabled}
              value={value}
              key={index}
            >
              {text}
            </option>
          ))}
        </select>
        <Icon name='chevron-down' select />
      </InputContainer>
    )
  }
}

export default Select
