import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ErrorText from '../ErrorText'
import HelperText from '../HelperText'
import { sparkBaseClassName, sparkClassName } from '../../util'

class InputContainer extends React.Component {
  static defaultProps = {
      children: null,
      positionLabelUpper: false
  };

  static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      error: PropTypes.string,
      helper: PropTypes.node,
      id: PropTypes.string,
      label: PropTypes.string,
      positionLabelUpper: PropTypes.bool
  };

  get className() {
      const { className } = this.props

    if(className && className.includes("InputContainer")) {
      return className;
    }
    return classNames(sparkBaseClassName('InputContainer'), {
      [className]: className
    })
  }

  render = () => {
      const {
          children,
          className,
          error,
          helper,
          label,
          id,
          positionLabelUpper,
          inputRef,
          ...props
      } = this.props

      return (
        <div className={sparkClassName('utility', 'JavaScript')}>
            <div className={className || this.className} ref={inputRef} {...props}>
                {label && (
                  <label htmlFor={id} className={sparkClassName('base', 'Label')}>
                          {label}
                      </label>
                  )}
                {children}
                <ErrorText id={id} error={error} />
                {helper && <HelperText>{helper}</HelperText>}
              </div>
          </div>
      )
  }
}

export default InputContainer
