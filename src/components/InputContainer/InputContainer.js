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
  }

  static propTypes = {
    children: PropTypes.node,
    positionLabelUpper: PropTypes.bool,
    error: PropTypes.string,
    helper: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string
  }

  get className() {
    const { className } = this.props

    return classNames(
      sparkBaseClassName('InputContainer'),
      {[className]: className}
    )
  }

  renderErrorContent = () => {
    const {error} = this.props

    if (!error) return null

    return (
      <ErrorText>{error}</ErrorText>
    )
  }

  renderHelperContent = () => {
    const { helper } = this.props

    if (!helper) return null

    return (
      <HelperText>{helper}</HelperText>
    )
  }

  renderLabelContent = () => {
    const { id, label } = this.props

    return (
      <label htmlFor={id} className={sparkClassName('base', 'Label')}>
        {label}
      </label>
    )
  }

  render = () => {
    const { children, id, positionLabelUpper, ...props } = this.props

    return (
      <div className={sparkClassName('base', 'InputContainer')} {...props}>
        {positionLabelUpper && this.renderLabelContent(this.props)}
        {children}
        <div
          className={sparkClassName('base', 'InputContainer', 'input-border')}
        />
        {!positionLabelUpper && this.renderLabelContent(this.props)}
        <div
          className={sparkClassName('base', 'ErrorContainer')}
          id={`${id}--error-container`}
        >
          {this.renderHelperContent()}
          {this.renderErrorContent()}
        </div>
      </div>
    )
  }
}

export default InputContainer
