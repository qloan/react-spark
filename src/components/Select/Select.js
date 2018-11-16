import { bindUIEvents } from '@sparkdesignsystem/spark-core/base/textInput'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName, sparkWidthClassName } from '../../util'
import InputContainer from './../InputContainer/InputContainer'

class Select extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    width: 100
  }

  selectRef = React.createRef()

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    width: PropTypes.number
  }

  componentDidMount = () => {
    bindUIEvents(this.selectRef.current)
  }

  get className() {
    const { error, width } = this.props

    const baseClass = sparkClassName('base', 'Select')
    const errorClass = sparkClassName('base', 'TextInput', null, 'error')
    const widthClass = sparkWidthClassName(width)

    return classNames(baseClass, {
      [errorClass]: error,
      [widthClass]: width
    })
  }

  render = () => {
    const { disabled, error, id, label, name, options, ...rest } = this.props

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
          {...rest}
        >
          {options.map(
            ({ disabled = false, value, selected = false, text }) => (
              <option disabled={disabled} value={value} selected={selected}>
                {text}
              </option>
            )
          )}
        </select>
        {/* todo: create svg component */}
        <svg
          className={
            sparkClassName('component', 'Icon') +
            ' ' +
            sparkClassName('base', 'SelectContainer', 'icon')
          }
          viewBox='0 0 64 64'
        >
          <use xlinkHref='#chevron-down' />
        </svg>
      </InputContainer>
    )
  }
}

export default Select
