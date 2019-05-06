import { SprkRevealInput } from '@sparkdesignsystem/spark-react'
import React from 'react'
import {
  // isValidSSN as sparkIsValidSSN,
  formatSSN,
} from '@sparkdesignsystem/spark-core';
import PropTypes from 'prop-types';
class SsnInput extends React.Component {

  static defaultProps = {
        className: null,
        disabled: false,
        error: null,
        label: 'Social Security Number',
        // pattern: null,
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
        // pattern: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        helper: PropTypes.string,
        width: PropTypes.number,
      };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ssn: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  
  // isValidSSN(ssn){
  //   console.log(ssn);
  //   const {pattern} = this.props;
  //   if (pattern)
  //   {
  //     return new RegExp(pattern).test(ssn);
  //   }

  //   const sparkValidSSN = sparkIsValidSSN(ssn);
   
  //   return sparkValidSSN;
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     ssn: value,
  //   });
  // }


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
  // const { ssn } = this.state;

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






// import { bindSSNInputUIEvents, formatSSN } from '@sparkdesignsystem/spark-core'
// import classnames from 'classnames'
// import PropTypes from 'prop-types'
// import React from 'react'
// import InputContainer from './../InputContainer/InputContainer'
// import { sparkBaseClassName, sparkClassName } from '../../util'

// export const ssnInputValidationRegex =
//   '(^(?!666|000|9\\d{2})\\d{3}([-]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$'
// class SsnInput extends React.Component {
//   static defaultProps = {
//     className: null,
//     disabled: false,
//     error: null,
//     label: 'Social Security Number',
//     pattern: ssnInputValidationRegex,
//     placeholder: '000-00-0000',
//     showSsnLabel: 'Show Social Security Number',
//     value: '',
//     width: 100
//   };

//   inputRef = React.createRef();

//   static propTypes = {
//     className: PropTypes.string,
//     disabled: PropTypes.bool,
//     error: PropTypes.string,
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string,
//     pattern: PropTypes.string,
//     placeholder: PropTypes.string,
//     showSsnLabel: PropTypes.string,
//     value: PropTypes.string,
//     helper: PropTypes.string,
//     width: PropTypes.number
//   };

//   get className() {
//     const { className, error, width } = this.props
//     const errorClassName = error
//       ? sparkBaseClassName('TextInput', null, 'error')
//       : null
//     const widthClassName = width
//       ? sparkClassName('utility', `Width-${width}`)
//       : null

//     return classnames(sparkBaseClassName('TextInput'), {
//       [errorClassName]: errorClassName,
//       [widthClassName]: widthClassName,
//       [className]: className
//     })
//   }

//   componentDidMount = () => {
//     const inputElement = this.inputRef.current
//     bindSSNInputUIEvents(inputElement)
//   };

//   handleChange = event => {
//     event.target.value = event.target.value.replace(/-/g, '')
//     if (typeof this.props.onChange === 'function') {
//       this.props.onChange(event)
//     }
//   };

//   handleBlur = event => {
//     event.target.value = event.target.value.replace(/-/g, '')
//     if (typeof this.props.onBlur === 'function') {
//       this.props.onBlur(event)
//     }
//   };

//   get maskedValue() {
//     const { pattern, value } = this.props
//     const inputElement = this.inputRef.current
//     const patternRegex = new RegExp(pattern)

//     if (value == null) {
//       // This component is uncontrolled
//       return patternRegex.test(inputElement.value)
//         ? formatSSN(inputElement.value)
//         : inputElement.value
//     } else {
//       return patternRegex.test(value) ? formatSSN(value) : value
//     }
//   }

//   get selectionContainerClassName() {
//     return [
//       sparkBaseClassName('SelectionContainer'),
//       sparkBaseClassName('InputContainer', 'visibility-toggle')
//     ].join(' ')
//   }

//   get showSsnLabelClassName() {
//     return [
//       sparkBaseClassName('Label'),
//       sparkBaseClassName('Label', null, 'inline')
//     ].join(' ')
//   }

//   render = () => {
//     const {
//       className,
//       disabled,
//       error,
//       id,
//       label,
//       pattern,
//       placeholder,
//       showSsnLabel,
//       value,
//       width,
//       helper,
//       ...props
//     } = this.props
//     const valueProp = value == null ? {} : { value: formatSSN(value) }
//     return (
//       <InputContainer
//         error={error}
//         helper={helper}
//         id={id}
//         label={label}
//         inputRef={this.inputRef}
//         data-sprk-input='ssn'
//       >
//         <input
//           aria-describedby={`${id}--error-container`}
//           className={this.className}
//           disabled={disabled}
//           id={id}
//           pattern={pattern}
//           placeholder={placeholder}
//           {...valueProp}
//           {...props}
//           type='password'
//           onChange={this.handleChange}
//           onBlur={this.handleBlur}
//         />
//         <div className={this.selectionContainerClassName}>
//           <input disabled={disabled} id={`${id}-show-ssn`} type='checkbox' />
//           <label
//             className={this.showSsnLabelClassName}
//             htmlFor={`${id}-show-ssn`}
//           >
//             {showSsnLabel}
//           </label>
//         </div>
//       </InputContainer>
//     )
//   };
// }

// export default SsnInput
