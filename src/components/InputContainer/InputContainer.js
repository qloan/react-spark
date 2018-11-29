import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ErrorText from '../ErrorText'
import { sparkBaseClassName, sparkClassName } from '../../util'

class InputContainer extends React.Component {
  static defaultProps = {
    children: null,
    positionLabelUpper: false
  }

  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    positionLabelUpper: PropTypes.bool
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkBaseClassName('InputContainer'),
      {[className]: className}
    )
  }

  renderErrorContent = () => {
    const {error} = this.props

    if (!error) return null

    return (
      // TODO: Icon SVG
      <ErrorText>{error}</ErrorText>
    )
  }

  renderLabelContent = ({id, label}) => (
    <label htmlFor={id} className={sparkBaseClassName('Label')}>
      {label}
    </label>
  )

  render = () => {
    const {
      children,
      className,
      id,
      label,
      positionLabelUpper,
      ...props
    } = this.props

    return (
      <div className={sparkClassName('utility', 'JavaScript')}>
        <div className={this.className} {...props}>
          {positionLabelUpper && this.renderLabelContent(this.props)}
          {children}
          <div
            className={sparkBaseClassName('InputContainer', 'input-border')}
          />
          {!positionLabelUpper && this.renderLabelContent(this.props)}
          <div
            className={sparkBaseClassName('ErrorContainer')}
            id={`${id}--error-container`}
          >
            {this.renderErrorContent()}
          </div>
        </div>
      </div>
    )
  }
}

export default InputContainer
