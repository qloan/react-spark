import PropTypes from 'prop-types'
import React from 'react'

import Checkbox from '../Checkbox'
import ErrorText from '../ErrorText'
import Fieldset from '../Fieldset'
import Label from '../Label'
import Legend from '../Legend'
import InputContainer from '../InputContainer'

import { sparkBaseClassName } from '../../util'

class CheckboxGroup extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    onChange: () => {
      console.log('onChange not implemented')
    }
  }

  static propTypes = {
    checkboxes: PropTypes.arrayOf(
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
    const {
      checkboxes,
      className,
      disabled,
      id,
      label,
      onChange,
      ...props
    } = this.props

    return (
      <InputContainer className={className} {...props}>
        <Fieldset>
          <Legend>
            <Label>{label}</Label>
          </Legend>
          {checkboxes.map(checkbox => (
            <Checkbox
              checked={checkbox.checked ? 'checked' : null}
              containerId={id}
              disabled={disabled || checkbox.disabled}
              id={checkbox.id || checkbox.name}
              key={checkbox.id}
              label={checkbox.label}
              name={checkbox.name}
              onChange={onChange}
              value={checkbox.value || ''}
            />
          ))}
        </Fieldset>
      </InputContainer>
    )
  }
}

export default CheckboxGroup
