import PropTypes from 'prop-types'
import React from 'react'

import ErrorText from '../ErrorText'
import Fieldset from '../Fieldset'
import InputContainer from '../InputContainer'
import Label from '../Label'
import Legend from '../Legend'
import Radio from '../Radio'

import { sparkBaseClassName } from '../../util'

class RadioGroup extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    onChange: () => {
      console.log('onChange not implemented')
    }
  }

  static propTypes = {
    radios: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.function
  }

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'inline')
    ].join(' ')
  }

  renderErrorContent = () => {
    const { error } = this.props

    if (!error) return null

    return (
      // TODO: Icon SVG
      <ErrorText>{error}</ErrorText>
    )
  }

  render = () => {
    const { disabled, id, label, onChange, radios } = this.props

    return (
      <InputContainer>
        <Fieldset>
          <Legend>
            <Label>{label}</Label>
          </Legend>
          {radios.map(checkbox => (
            <Radio
              checked={checkbox.checked ? 'checked' : null}
              containerId={id}
              disabled={disabled}
              id={checkbox.id || checkbox.name}
              key={checkbox.id}
              label={checkbox.label}
              name={checkbox.name}
              onChange={onChange}
            />
          ))}
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

export default RadioGroup
