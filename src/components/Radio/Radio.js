import PropTypes from 'prop-types'
import React from 'react'

import SelectionContainer from '../SelectionContainer'
import { sparkBaseClassName } from '../../util/index'

class Radio extends React.Component {
  static defaultProps = {
    checked: false,
    disabled: false
  }

  static propTypes = {
    containerId: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired
  }

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'inline')
    ].join(' ')
  }

  render = () => {
    const {
      containerId,
      checked,
      disabled,
      id,
      label,
      name,
      onChange,
      value,
      ...rest
    } = this.props

    return (
      <SelectionContainer>
        <input
          aria-describedby={`${containerId}--error-container`}
          checked={checked}
          disabled={disabled}
          data-id={id}
          id={id}
          name={name}
          onChange={onChange}
          type='radio'
          value={value}
          {...rest}
        />
        <label className={this.labelClassName} htmlFor={id}>
          {label}
        </label>
      </SelectionContainer>
    )
  }
}

export default Radio
