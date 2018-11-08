import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName } from '../../util'

class ErrorText extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const {children} = this.props

    return (
      <div className={sparkBaseClassName('ErrorText')}>
        {children}
      </div>
    )
  }
}

export default ErrorText
