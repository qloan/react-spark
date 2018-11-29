import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ErrorText from '../ErrorText'
import HelperText from '../HelperText'
import { sparkBaseClassName, sparkClassName } from '../../util'

class InputContainer extends React.Component {
  static defaultProps = {
    children: null,
    positionLabelUpper: false,
    variant: null
  }

  static propTypes = {
    children: PropTypes.node,
    positionLabelUpper: PropTypes.bool,
    error: PropTypes.string,
    helper: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.string
  }

  get className() {
    const {className} = this.props

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
    const { variant, id, label } = this.props

    const baseClass = sparkClassName('base', 'Label')
    const variantClass = variant === 'monetary' ? sparkClassName('base', 'Label', null, variant) : null

    return (
      <label htmlFor={id} className={classNames(baseClass, {
        [variantClass]: variant
      })}>
        {label}
      </label>
    )
  }

  get textInputIconContainerClassNames() {
    const { variant } = this.props

    const baseClass = sparkClassName('base', 'TextInputIconContainer')
    const variantClass = variant === 'monetary' ? sparkClassName('base', 'TextInputIconContainer', null, variant) : null

    return classNames(baseClass, {
      [variantClass]: variant
    })
  }

  render = () => {
    const { children, className, id, positionLabelUpper, variant, ...props } = this.props
    const classNameInputIconContainer = this.textInputIconContainerClassNames

    if (variant) {
      return (
        <div className={sparkClassName('base', 'InputContainer')}>
          <div className={classNameInputIconContainer} {...props}>
            {positionLabelUpper && this.renderLabelContent()}
            {children}
            <div
              className={sparkClassName('base', 'InputContainer', 'input-border')}
            />
            {!positionLabelUpper && this.renderLabelContent()}
          </div>
          <div
            className={sparkBaseClassName('ErrorContainer')}
            id={`${id}--error-container`}
          >
            {this.renderHelperContent()}
            {this.renderErrorContent()}
          </div>
        </div>
      )
    }
    return (
      <div className={sparkClassName('base', 'InputContainer')} data-sprk-input={variant}>
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
