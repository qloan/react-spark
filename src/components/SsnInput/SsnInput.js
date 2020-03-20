import { SprkRevealInput } from '@sparkdesignsystem/spark-react'
import React from 'react'
import {formatSSN} from '@sparkdesignsystem/spark-core'
import PropTypes from 'prop-types'
import ErrorText from '../ErrorText'

class SsnInput extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    label: 'Social Security Number',
    placeholder: '000-00-0000',
    value: '',
    width: 100

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
        width: PropTypes.number
      };

    handleChange = event => {
      event.target.value = event.target.value.replace(/-/g, '')
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event)
      }
    };

    render() {
      const {
        className,
        error,
        helper,
        id,
        label,
        value,
        ...rest
      } = this.props

      /*
  * Formatting the ssn value only at 9 characters, this is to prevent (most of the time) the cursor from jumping
  * to the end of the input field every time a character is removed.
  * */
      return (
        <React.Fragment>
          <SprkRevealInput
            additionalClasses={className}
            helperText={helper}
            formatter={!error && value.length === 9 ? formatSSN : undefined}
            valid={!error}
            value={value}
            onChange={this.handleChange}
            label={label}
            toggleLabel='Show SSN'
            name='ssn'
            id={id}
            {...rest}
          />
          {error &&
            <div style={{ marginTop: '-32px' }}>
              <ErrorText id={id} error={error} />
            </div>
          }
        </React.Fragment>
      )
    }
}
export default SsnInput
