import PropTypes from 'prop-types'
import React from 'react'

import SelectionContainer from '../SelectionContainer'
import { sparkBaseClassName } from '../../util/index'

class Checkbox extends React.Component {
  static defaultProps = {
    checked: false,
    disabled: false
  }

  static propTypes = {
    containerId: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'inline')
    ].join(' ')
  }

  render = () => {
    const { containerId, checked, disabled, id, label, ...rest } = this.props

    return (
      <SelectionContainer label={label}>
        <input
          aria-describedby={`${containerId}--error-container`}
          checked={checked}
          data-id={id}
          disabled={disabled}
          id={id}
          type='checkbox'
          {...rest}
        />
        <label className={this.labelClassName} htmlFor={id}>
          {label}
        </label>
      </SelectionContainer>
    )
  }
}

export default Checkbox
