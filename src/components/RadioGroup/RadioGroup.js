import PropTypes from 'prop-types';
import React from 'react';

import ErrorText from '../ErrorText';
import Fieldset from '../Fieldset';
import InputContainer from '../InputContainer';
import Label from '../Label';
import Legend from '../Legend';
import Radio from '../Radio';

import { sparkBaseClassName } from '../../util';

class RadioGroup extends React.Component {
  static defaultProps = {
    disabled: false,
    error: null,
    label: '',
    onChange: () => {
      console.log('onChange not implemented')
    }
  };

  static propTypes = {
    radios: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.node.isRequired,
        value: PropTypes.any.isRequired
      })
    ).isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.node,
    onChange: PropTypes.func,
    parentContainerClassName: PropTypes.string
  };

  get labelClassName() {
    return [
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'inline')
    ].join(' ')
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
      value,
      parentContainerClassName,
      ...props
    } = this.props

    return (
      <InputContainer id={id} className={parentContainerClassName} {...props}>
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
      </InputContainer>
    )
  };
}

export default RadioGroup
