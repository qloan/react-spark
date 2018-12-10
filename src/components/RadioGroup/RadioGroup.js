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
    label: '',
    onChange: () => {
      console.log('onChange not implemented')
    }
  }

  static propTypes = {
    radios: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
      })
    ).isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func
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
    const {
      className,
      disabled,
      id,
      label,
      name,
      onChange,
      radios,
      value
    } = this.props

    return (
      <InputContainer>
        <Fieldset>
          <Legend>
            <Label>{label}</Label>
          </Legend>
          {radios.map(radio => (
            <Radio
              className={className}
              checked={radio.value === value}
              containerId={id}
              disabled={disabled || radio.disabled}
              id={radio.id}
              key={radio.id}
              label={radio.label}
              name={name}
              onChange={onChange}
              value={radio.value || ''}
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