import PropTypes from 'prop-types'
import React from 'react'
import ErrorText from '../ErrorText'
import { sparkClassName } from '../../util'
import Icon from '../Icon'

class InputContainer extends React.Component {
  static defaultProps = {
    children: null,
    positionLabelUpper: false
  }

  static propTypes = {
    children: PropTypes.node,
    positionLabelUpper: PropTypes.bool
  }

  renderErrorContent = () => {
    const { error } = this.props

    if (!error) return null

    return (
      // TODO: Icon SVG
      <ErrorText>{error}</ErrorText>
    )
  }

  renderLabelContent = ({ id, label }) => (
    <label htmlFor={id} className={sparkClassName('base', 'Label')}>
      {label}
    </label>
  )

  render = () => {
    const { children, id, positionLabelUpper } = this.props
    const className = sparkClassName('base', 'InputContainer')

    return (
      <div className={sparkClassName('utility', 'JavaScript')}>
        <div className={className}>
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
            {this.renderErrorContent()}
          </div>
        </div>
      </div>
    )
  }
}

export default InputContainer
