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
  };

  selectRef = React.createRef();

  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.number
  };

  componentDidMount = () => {
    bindUIEvents(this.selectRef.current)
  };

  get selectClassName() {
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
    const { disabled, id, label, options } = this.props

    return (
      <InputContainer id={id} label={label}>
        <select
          className={sparkClassName('base', 'Select')}
          id={id}
          data-id={id}
          ref={this.selectRef}
          aria-describedby={`${id}--error-container`}
          data-sprk-input='select'
          disabled={disabled}
        >
          {options.map(({ value, text }) => (
            <option value={value}>{text}</option>
          ))}
        </select>
        {/* todo: create svg component */}
        <svg
          className={sparkClassName('component', 'Icon') + ' ' + sparkClassName('base', 'SelectContainer', 'icon')}
          viewBox='0 0 64 64'
        >
          <use xlinkHref='#chevron-down' />
        </svg>
      </InputContainer>
    )
  };
}

export default Select
