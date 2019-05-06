import { SprkRevealInput } from '@sparkdesignsystem/spark-react'
import React from 'react'
import {formatSSN} from '@sparkdesignsystem/spark-core';
import PropTypes from 'prop-types';
class SsnInput extends React.Component {

  static defaultProps = {
        className: null,
        disabled: false,
        error: null,
        label: 'Social Security Number',
        placeholder: '000-00-0000',
        value: '',
        width: 100,

      };

      static propTypes = {
        className: PropTypes.string,
        disabled: PropTypes.bool,
        error: PropTypes.string,
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        helper: PropTypes.string,
        width: PropTypes.number,
      };

    handleChange = event => {
    event.target.value = event.target.value.replace(/-/g, '')
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  };

  render(){
  const {
    className,
    error,
    helper,
    label,
    onChange,
    value,
    ...rest
  } = this.props;

  return(
    <SprkRevealInput
      additionalClasses={className}
      errorMessage={error}
      helperText={helper}
      formatter={formatSSN}
      valid={!error}
      value={value}
      onChange={this.handleChange}    
      label={label}
      toggleLabel='Show SSN'
      name='ssn'
      {...rest}
    />
  );
}
}
export default SsnInput