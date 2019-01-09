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
    helper: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    positionLabelUpper: PropTypes.bool
  };

  get className() {
    const { className } = this.props

    return classNames(sparkBaseClassName('InputContainer'), {
      [className]: className
    })
  }

  renderErrorContent = () => {
    const { error } = this.props

    if (!error) return null

    return <ErrorText>{error}</ErrorText>
  };

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
        <div className={this.className} ref={inputRef} {...props}>
          <label htmlFor={id} className={sparkClassName('base', 'Label')}>
            {label}
          </label>
          {children}
          <div
            className={sparkBaseClassName('InputContainer', 'input-border')}
          />
          {helper && <HelperText>{helper}</HelperText>}
          <div
            className={sparkBaseClassName('ErrorContainer')}
            id={`${id}--error-container`}
          >
            {this.renderErrorContent()}
          </div>
        </div>
      </div>
    )
  };
}

export default InputContainer
