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
    },
    value: []
  }

  static propTypes = {
    checkboxes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.any
      })
    ).isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.any).isRequired
  }

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'inline')
    ].join(' ')
  }

  render = () => {
    const {
      checkboxes,
      className,
      disabled,
      id,
      label,
      onChange,
      name,
      value,
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
              checked={value.indexOf(checkbox.value) !== -1}
              containerId={id}
              disabled={disabled || checkbox.disabled}
              id={checkbox.id}
              key={checkbox.id}
              label={checkbox.label}
              name={name}
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
