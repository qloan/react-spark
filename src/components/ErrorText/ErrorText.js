import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../Icon'
import { sparkBaseClassName } from '../../util'

class ErrorText extends React.Component {
  static defaultProps = {
    children: null
  };

  static propTypes = {
    children: PropTypes.node
  };

  render = () => {
    const { id, children } = this.props

    return (
      <div
        className={sparkBaseClassName('ErrorContainer')}
        id={`${id}--error-container`}
      >
        <Icon name='exclamation-filled-circle' select />
        <div className={sparkBaseClassName('ErrorText')}>{children}</div>
      </div>
    )
  };
}

export default ErrorText
