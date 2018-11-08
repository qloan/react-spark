import PropTypes from 'prop-types'
import React from 'react'

import Checkbox from '../Checkbox'
import ErrorText from '../ErrorText'
import Fieldset from '../Fieldset'
import Label from '../Label'
import Legend from '../Legend'
import InputContainer from '../InputContainer'
import SelectionContainer from '../SelectionContainer'

import { sparkBaseClassName } from '../../util'

class CheckboxGroup extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null
  }

  static propTypes = {
    checkboxes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })).isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'inline')
    ].join(' ')
  }

  renderErrorContent = () => {
    const {error} = this.props

    if (!error) return null

    return (
      // TODO: Icon SVG
      <ErrorText>{error}</ErrorText>
    )
  }

  render = () => {
    const {checkboxes, disabled, id, label} = this.props

    return (
      <InputContainer>
        <Fieldset>
          <Legend>
            <Label>{label}</Label>
          </Legend>
          <SelectionContainer>
            {checkboxes.map(checkbox => (
              <Checkbox
                containerId={id}
                disabled={disabled}
                id={checkbox.id}
                key={checkbox.id}
                label={checkbox.label}
              />
            ))}
          </SelectionContainer>
        </Fieldset>
        <div
          className={sparkBaseClassName('ErrorContainer')}
          id={`${id}--error-container`}
        >
          {this.renderErrorContent()}
        </div>
      </InputContainer>
    )
  }
}

export default CheckboxGroup
