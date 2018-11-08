import PropTypes from 'prop-types'
import React from 'react'

import SelectionContainer from '../SelectionContainer'
import { sparkBaseClassName } from '../../util/index'

class Checkbox extends React.Component {
  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    containerId: PropTypes.string.isRequired,
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
    const {containerId, disabled, id, label} = this.props

    return (
      <SelectionContainer>
        <input
          aria-describedby={`${containerId}--error-container`}
          data-id={id}
          disabled={disabled}
          id={id}
          type='checkbox'
        />
        <label
          className={this.labelClassName}
          htmlFor={id}
        >
          {label}
        </label>
      </SelectionContainer>
    )
  }
}

export default Checkbox
